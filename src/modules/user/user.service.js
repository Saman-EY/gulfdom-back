const autoBind = require("auto-bind");
const nodemailer = require("nodemailer");

class UserService {
  constructor() {
    autoBind(this);
  }

  async sendDetails({ fullname, phone, email, how_he_find, comment }) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // usually true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"GulfDom No-Reply"`,
      to: process.env.SMTP_USER, // your email
      subject: "New Form Submission",
      html: `
        <h3>GulfDom New User Details</h3>
        <p><strong>User FullName:</strong> ${fullname}</p>
        <p><strong>User Phone Number:</strong> ${phone}</p>
        <p><strong>User Email:</strong> ${email}</p>
        <p><strong>How User Find GulfDom:</strong> ${how_he_find}</p>
        <p><strong>User Comment:</strong> ${comment}</p>
      `,
    };

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      return { info };
    } catch (error) {
      console.error("Email sending error:", error);
      throw error;
    }
  }
}
module.exports = new UserService();
