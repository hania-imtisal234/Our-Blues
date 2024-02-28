const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: [true],
        unique: true,
    },
    user: {
        type: String,
        required: [true, "User Name is Required!"],
    },
    content: {
        type: String,
        required:[true, "Content of Messages do not exist"]
    },
    reported: {
        type: Boolean,
        required: [false],
        //default: false,
    },
    createdAt: {
        type: Date, 
        required: [true],
        default: new Date().toUTCString(),

    },
})

module.exports = mongoose.model("Chat", chatSchema)