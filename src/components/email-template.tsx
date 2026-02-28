import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
      Message from: {fullName}
    </h1>
    <p style={{ color: "#666", marginTop: "10px" }}>
      <strong>Email:</strong> {email}
    </p>
    <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #ddd" }}>
      <p style={{ color: "#333", whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
        {message}
      </p>
    </div>
    <p style={{ color: "#999", fontSize: "12px", marginTop: "30px" }}>
      This email was sent from your portfolio contact form.
    </p>
  </div>
);
