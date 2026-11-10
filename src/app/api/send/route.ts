import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";

const ContactSubmission = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(3).max(160),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional(),
});

const windows = new Map<string, { count: number; start: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

function isRateLimited(key: string) {
  const now = Date.now();
  const window = windows.get(key);
  if (!window || now - window.start > WINDOW_MS) {
    windows.set(key, { count: 1, start: now });
    return false;
  }
  window.count += 1;
  return window.count > MAX_SUBMISSIONS;
}

export async function POST(req: Request) {
  if (req.headers.get("content-length") && Number(req.headers.get("content-length")) > 12_000) {
    return Response.json({ error: "Submission is too large." }, { status: 413 });
  }

  const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(forwardedFor)) {
    return Response.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = ContactSubmission.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Please check the form fields and try again." }, { status: 400 });
  }
  // Reject submissions caught by the honeypot; never report delivery when nothing was sent.
  if (parsed.data.website) return Response.json({ error: "Invalid submission." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    return Response.json({ error: "The contact service is not configured yet." }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: parsed.data.email,
      subject: `Portfolio contact: ${parsed.data.subject}`,
      react: EmailTemplate({
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        message: `Subject: ${parsed.data.subject}\n\n${parsed.data.message}`,
      }),
    });

    if (error) return Response.json({ error: "Email delivery failed. Please try again later." }, { status: 502 });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Email delivery failed. Please try again later." }, { status: 502 });
  }
}
