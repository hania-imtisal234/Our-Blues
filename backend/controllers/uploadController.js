const Therapist = require("../Models/therapistModel");

module.exports.UploadImage = async (req, res) => {
  try {
    const { email } = req.body;

    const existingTherapist = await Therapist.findOne({ email });

    if (!existingTherapist) {
      return res.status(404).json({ error: "Therapist not found" });
    }

    if (existingTherapist.LicenseeImage) {
      return res.status(400).json({ error: "Image already uploaded" });
    }

    if (req.file) {
      existingTherapist.LicenseeImage = req.file.path;
    }

    await existingTherapist.save();

    res.status(201).json({
      message: "File uploaded and saved successfully",
      success: true,
      existingTherapist,
    });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({ error: "Failed to upload image" });
  }
};
