const supportGroup = require("../Models/chatModel")

module.exports.getChat = async (req, res) => {
    try {
        const getChats = await supportGroup.find()
        res
            .status(201)
            .json({getChats})
    } catch(err) {
        console.log(err)
    }
};