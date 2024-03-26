const therapistDetails = require("../Models/therapistModel");

module.exports.getTherapists = async (req, res) => {
  try {
    const getTherapists = await therapistDetails.find({});
    res.status(201).json({ getTherapists });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
