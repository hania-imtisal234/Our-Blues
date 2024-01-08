const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
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
        required: [true, "Your Last Name is required"],
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
        required: [true, "Your Phone Number is required"],
    },
    location: {
        type: String,
        required: [false],
    },
    role: {
        type: String,
        required: [true],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
})

module.exports = mongoose.model("User", userSchema)