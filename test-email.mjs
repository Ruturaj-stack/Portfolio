import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) throw new Error("Set RESEND_API_KEY before running this script.");
const resend = new Resend(apiKey);

console.log("Testing Resend API...");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: ["ruturajagdale07@gmail.com"],
  subject: "Test Email from Node Script",
  html: "<h2>Testing Resend</h2><p>If you see this, the API works.</p>"
}).then(result => {
  console.log("Result:", JSON.stringify(result, null, 2));
}).catch(console.error);
