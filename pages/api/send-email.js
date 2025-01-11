import { Resend } from "resend";
import { EmailTemplate } from "../../components/EmailTemplate";

const resend = new Resend("re_NwVVw3CQ_65rJMW6SiGYbG7ucUcajUxmP");

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    try {
      const { data, error } = await resend.emails.send({
        from: "hamaadafzal516@gmail.com",
        to: ["hamaadafzal516@gmail.com"],
        subject: `Message from ${name}`,
        react: EmailTemplate({ name, message }),
      });
  
      if (error) {
        console.error("Email sending error:", error);
        return res.status(400).json({ message: error.message || "Email failed to send." });
      }
  
      res.status(200).json(data);
    } catch (err) {
      console.error("Unexpected server error:", err);
      res.status(500).json({ message: "Internal server error. Please try again later." });
    }
  }
  
