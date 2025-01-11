require("dotenv").config();
import ReactDOMServer from "react-dom/server";
import nodemailer from "nodemailer";
import { EmailTemplate } from "../../components/EmailTemplate";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const htmlContent = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplate name={name} message={message} />
  );

  console.log("Received request to send email:", {
    name,
    email,
    message,
  });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    service: process.env.SMTP_SERVICE,
    secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: "hamaadafzal516@gmail.com",
    subject: `Message from ${name}`,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    if (info.accepted.length > 0) {
      console.log("Email sent successfully:", info);
      res.status(200).json({ message: "Email sent successfully!" });
    } else {
      console.error("Failed to send email. No recipients accepted it:", info);
      res.status(400).json({ message: "Failed to send email." });
    }
  } catch (err) {
    console.error("Email sending error:", err);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
}
