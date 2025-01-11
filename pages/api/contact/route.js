import nodemailer from 'nodemailer';

async function testMail() {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: '"Test" <test@example.com>',
      to: "recipient@example.com",
      subject: "Hello",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Test mail error:", error.message, error.stack);
  }
}

testMail();
