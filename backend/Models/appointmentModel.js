const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Users FirstName is required!"],
  },
  lastName: {
    type: String,
    required: [true, "Users LastName is required!"],
  },
  userEmail: {
    type: String,
    required: [true, "User Email is required!"],
  },
  therapistEmail: {
    type: String,
    required: [true, "Therapist Email is required!"],
  },
  date: {
    type: Date,
    required: [true, "Date is required!"],
  },
  time: {
    type: String,
    required: [true, "Time is required!"],
  },
  meetLink: {
    type: String,
    required: [true, "Meet link is required!"],
  },
});

module.exports = mongoose.model("appointment", appointmentSchema);
