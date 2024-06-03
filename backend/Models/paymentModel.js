const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User Name is required"],
  },
  userEmail: {
    type: String,
    required: [true, "User Email is required"],
  },
  therapistName: {
    type: String,
    required: [true, "Therapist Name is required"],
  },
  amount: {
    type: String,
    required: [true, "Amount is required"],
  },
  currency: {
    type: String,
    default: "Pkr",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Payments", paymentSchema);
