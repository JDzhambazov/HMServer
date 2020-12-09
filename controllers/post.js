const Post = require('../models/postsmodel')

const saveMessage = async (req, res) => {
    const mess = {
        adressID,
        tytle,
        message,
        creater,
        createdAt
    } = req.body
    try {
        const createMessage = new Post(mess)
        const newMessage = await createMessage.save()
        res.status(200).send(newMessage)
    } catch (err) {
        res.status(401).send(err)
    }


}
const getAllMessages = async (req, res) => {

    const id = {
        addressID
    } = req.body

    try {
        const posts = await Post.find({ addressID: id.addressID }, { __v: 0 })
            .sort([['createdAt', -1]])
        res.status(200).send(posts)
    } catch {
        res.status(401).send(err)
    }


}
const editMessage = async (req, res) => {
    const _id = req.params.id
    const data = {
        addressID,
        tytle,
        message,
        creater,
        createdAt
    } = req.body
    const updateMessage = await Post.findByIdAndUpdate(_id, data, { __v: 0 })
    res.send(updateMessage)
}
const deleteMessage = async (req, res) => {
    const _id = req.params.id
    await Post.findByIdAndDelete(_id)
    res.status(200)
}

module.exports = {
    saveMessage,
    getAllMessages,
    editMessage,
    deleteMessage
}