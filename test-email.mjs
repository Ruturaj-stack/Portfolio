import { Resend } from "resend";

const resend = new Resend("re_RETLS3X4_2mMfi9YtMYHXVDQQv2oKRYQk");

console.log("Testing Resend API...");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: ["ruturajagdale07@gmail.com"],
  subject: "Test Email from Node Script",
  html: "<h2>Testing Resend</h2><p>If you see this, the API works.</p>"
}).then(result => {
  console.log("Result:", JSON.stringify(result, null, 2));
}).catch(console.error);
