const Chat = require ("../Models/chatModel")

module.exports.supportGroup = async (req, res, next) => {
    try {
        const {count, user, content, createdAt} = req.body
        const chat = await Chat.create({count, user, content, createdAt})

        res
            .status(201)
            .json({message: "Chat Saved Successfully", succes: true, chat})
        next()
    } catch(err) {
        console.log(err)
    }
}