const mongoose = require("mongoose");

const therapistLicenseSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [false, "Your email address is required"],
    unique: false,
  },
  LicenseImage: {
    type: String,
    required: [true, "File is required"],
  },
});

module.exports = mongoose.model("TherapistLicense", therapistLicenseSchema);
