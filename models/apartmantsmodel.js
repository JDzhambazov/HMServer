const mongoose = require('mongoose');

const ApartmantSchema = new mongoose.Schema({
    adressID :{
        type:String,
        required:true
    },
    apartmet: {
        type:String
    },
    lift: {
        type:Boolean
    },
    people:{
        type: number
    },
    animal:{
        type:number,
        default:0
    }
});

module.exports = mongoose.model("Apartmant", ApartmantSchema)