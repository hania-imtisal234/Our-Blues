const TherapistLicense = require("../Models/therapistLicense");

module.exports.UploadImage = async (req, res) => {
  try {
    const { email } = req.body;
    console.log({ email });
    const existingLicense = await TherapistLicense.findOne({
      email,
    });

    if (existingLicense && existingLicense.LicenseImage) {
      return res.status(400).json({ error: "Image already uploaded" });
    }

    const licenseDetail = await TherapistLicense.create({
      email,
      LicenseImage: req.file.filename,
    });

    res.status(201).json({
      message: "File uploaded and saved successfully",
      success: true,
      licenseDetail,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to upload image" });
  }
};
