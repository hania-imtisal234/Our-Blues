const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = process.env;
// Function to send confirmation email
async function sendConfirmationEmail(recipientEmail, subject, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    // Send mail with defined transport object
    await transporter.sendMail({
      from: EMAIL, // Your email address
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
