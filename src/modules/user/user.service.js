const autoBind = require("auto-bind");

const nodemailer = require("nodemailer");


class UserService {
  constructor() {
    autoBind(this);
  }

  async sendDetails({ name,  phone }) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // usually true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"Website Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // your email
      subject: "New Form Submission",
      html: `
        <h3>User Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      return { info, success: true };
    } catch (error) {
      console.error("Email sending error:", error);
      throw error;
    }
  }
}
module.exports = new UserService();
