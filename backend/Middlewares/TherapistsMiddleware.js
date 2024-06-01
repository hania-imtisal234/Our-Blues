const therapistDetails = require("../Models/therapistModel");
const mongoose = require("mongoose");

module.exports.getTherapists = async (req, res) => {
  try {
    const getTherapists = await therapistDetails.find({});

    res.status(201).json(getTherapists);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getTherapistsById = async (req, res) => {
  try {
    console.log(req.params.id);
    const therapistId = req.params.id;
    if (!therapistId) {
      return res.status(400).json({ error: "Therapist ID is required" });
    }
    const therapist = await therapistDetails.findOne({ _id: therapistId });

    if (!therapist) {
      return res.status(404).json({ error: "Therapist not found" });
    }

    res.json(therapist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
