const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const therapistTimingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "Appointment date is required"],
  },
  startTime: {
    type: String,
    required: [true, "Start time is required"],
  },
  endTime: {
    type: String,
    required: [true, "End time is required"],
  },
  fees: {
    type: String,
    required: [true, "Fees is required"],
  },
});

const therapistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "Your First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Your Last Name is required"],
  },
  age: {
    type: Number,
    required: [true, "Your Age is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  phoneNumber: {
    type: String,
    required: [false],
  },
  location: {
    type: String,
    required: [false],
  },

  therapistTimings: [therapistTimingSchema],
  role: {
    type: String,
  },
  status: {
    type: String,
    default: "Deactivated",
  },
  LicenseeImage: {
    type: String,
    required: false,
  },
  qualification: {
    type: String,
    required: false,
  },
  ratings: {
    type: Number,
    required: false,
    default: 0,
    min: [0, "Rating must be at least 0"],
    max: [5, "Rating must be at most 5"],
  },
  totalRatingCount: {
    type: Number,
    required: false,
    default: 0,
  },
  totalRatingSum: {
    type: Number,
    required: false,
    default: 0,
  },
  experience: {
    type: String,
    required: false,
  },
  reviews: {
    type: Array,
    required: false,
  },
});

therapistSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("Therapist", therapistSchema);
