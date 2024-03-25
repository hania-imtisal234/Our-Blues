const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = process.env;

async function sendConfirmationEmail(recipientEmail, subject, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    await transporter.sendMail({
      from: EMAIL, // our blue email address
      to: recipientEmail,
      subject: subject,
      text: message,
    });

    console.log(`Confirmation email sent to ${recipientEmail}`);
  } catch (error) {
    console.error(
      `Error sending confirmation email to ${recipientEmail}:`,
      error
    );
    throw new Error("Error sending email");
  }
}

module.exports = { sendConfirmationEmail };
