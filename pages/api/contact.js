import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
        debug: true,  // Enable more detailed debug information
      });      

      // Email options
      const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's name and email
        to: "info@amf-sa.com", // Destination email
        subject: `New message from ${name}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
        html: `<p>You have a new message from <strong>${name}</strong> (<a href="mailto:${email}">${email}</a>):</p><p>${message}</p>`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
