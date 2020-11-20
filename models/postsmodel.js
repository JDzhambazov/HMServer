const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    adressID:{
        type:String,
        required:true
    },
    tytle: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    createrID: {
        type: String,
        required:true
    },
    createdAt: {
        type:Date,
        default:Date.now(),
        required:true
    },
});

module.exports = mongoose.model("Posts", PostsSchema)