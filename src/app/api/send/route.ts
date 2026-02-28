import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    // Initialize Resend inside the function
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable not set");
      return Response.json({ 
        error: "RESEND_API_KEY not configured" 
      }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    console.log("Contact form submission:", body);
    
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess) {
      console.error("Validation error:", zodError);
      return Response.json({ error: zodError?.message }, { status: 400 });
    }

    // Use the RESEND_EMAIL environment variable for testing
    const recipientEmail = process.env.RESEND_EMAIL;
    
    if (!recipientEmail) {
      console.error("RESEND_EMAIL environment variable not set");
      return Response.json({ 
        error: "RESEND_EMAIL not configured. Please set it in .env.local" 
      }, { status: 500 });
    }

    console.log("Sending email to:", recipientEmail);
    console.log("Resend API Key exists:", !!process.env.RESEND_API_KEY);

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [recipientEmail],
      subject: `Contact from portfolio - ${zodData.fullName}`,
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return Response.json({ error: resendError }, { status: 500 });
    }

    console.log("Email sent successfully:", resendData);
    return Response.json(resendData);
  } catch (error) {
    console.error("Catch error:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
