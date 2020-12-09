const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    addressID:{
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
    creater: {
        type: String,
        required:true
    },
    createdAt: {
        type:Date,
        required:true
    },
});

module.exports = mongoose.model("Posts", PostsSchema)