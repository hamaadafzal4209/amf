import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create Nodemailer transporter using your webmail SMTP credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.yourwebmailprovider.com", // E.g., "smtp.gmail.com" for Gmail
      port: 587, // TLS Port
      secure: false, // use TLS
      auth: {
        user: process.env.EMAIL, // Your webmail email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or App password
      },
    });

    // Prepare email options
    const mailOptions = {
      from: email, // Sender's email address
      to: "info@amf-sa.com", // Your destination email address
      subject: `New message from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
      html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
