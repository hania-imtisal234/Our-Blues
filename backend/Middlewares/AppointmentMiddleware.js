const appointmentDetails = require("../Models/appointmentModel");

module.exports.getAppointments = async (req, res) => {
  try {
    const appointments = await appointmentDetails.find();
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", data: [] });
  }
};
