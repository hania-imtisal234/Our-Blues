const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: false,
        unique: false,
    },
    user: {
        type: String,
        required: [true, "User Name is Required!"],
    },
    content: {
        type: String,
        required: [true, "Content of Messages do not exist"],
    },
    reported: {
        type: Boolean,
        required: false,
        default: false,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    group: {
        type: mongoose.Schema.Types.Mixed,
        required: true, 
    }
});

module.exports = mongoose.model("Chat", chatSchema);
