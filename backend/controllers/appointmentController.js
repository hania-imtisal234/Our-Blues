const Appointment = require("../Models/appointmentModel");
const { sendConfirmationEmail } = require("../util/emailUtils");
const { createMeeting } = require("../util/createMeetingUtil");
const { updateMeetingHost } = require("../util/updateMeetingHostUtil.js");

module.exports.bookAppointment = async (req, res, next) => {
  try {
    const { firstName, lastName, userEmail, therapistEmail, date, time } =
      req.body;

    const meetingInfo = await createMeeting(
      "Appointment with Therapist",
      60,
      new Date(date + "T" + time)
    );

    if (!meetingInfo) {
      throw new Error("Failed to create meeting link");
    }
    //  await updateMeetingHost(meetingInfo.meetingId, therapistEmail);

    const appointment = await Appointment.create({
      firstName,
      lastName,
      userEmail,
      therapistEmail,
      date,
      time,
      meetLink: meetingInfo.meetLink,
    });

    await sendConfirmationEmail(
      therapistEmail,
      "New Appointment Scheduled",
      `You have a new appointment scheduled for ${date} at ${time}. Here is the meetLink ${meetingInfo.meetLink}`
    );

    await sendConfirmationEmail(
      userEmail,
      "Appointment Confirmation",
      `Your appointment with the therapist is scheduled for ${date} at ${time}. Here is the meetLink ${meetingInfo.meetLink}`
    );

    res.status(201).json({
      message: "Appointment Saved Successfully",
      success: true,
      appointment,
    });
    next();
  } catch (err) {
    console.error("Error booking appointment:", err);
    res.status(500).json({ error: "Failed to book appointment" });
  }
};
