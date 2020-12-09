const mongoose = require('mongoose');

const ApartmantSchema = new mongoose.Schema({
    addressID :{
        type:String,
        required:true
    },
    apartment: {
        type:String,
        required:true
    },
    lift: {
        type:Number,
        default:1,
        required:true
    },
    people:{
        type: Number,
        required:true
    },
    animal:{
        type:Number,
        default:0
    }
});

module.exports = mongoose.model("Apartmant", ApartmantSchema)