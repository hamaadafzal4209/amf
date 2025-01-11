// components/EmailTemplate.js
export const EmailTemplate = ({ name, message }) => (
    <div>
      <h1>Hello {name},</h1>
      <p>{message}</p>
      <p>Best regards,<br/>Your Company</p>
    </div>
  );
  