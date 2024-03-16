const Appointment = require("../Models/appointmentModel");
const { v4: uuidv4 } = require("uuid");
const { sendConfirmationEmail } = require("../util/emailUtils");

const generateUniqueIdentifier = () => {
  return uuidv4();
};

module.exports.bookAppointment = async (req, res, next) => {
  try {
    const { userEmail, therapistEmail, date, time } = req.body;

    const appointmentIdentifier = generateUniqueIdentifier();
    const meetLink = `https://meet.google.com/${appointmentIdentifier}`;

    const appointment = await Appointment.create({
      userEmail,
      therapistEmail,
      date,
      time,
      meetLink,
    });

    await sendConfirmationEmail(
      therapistEmail,
      "New Appointment Scheduled",
      `You have a new appointment scheduled for ${date} at ${time}. Please follow this link to join the meeting: ${meetLink}`
    );
    res.status(201).json({
      message: "Appointment Saved Successfully",
      succes: true,
      appointment,
    });
    next();
  } catch (err) {
    console.log(err);
  }
};
