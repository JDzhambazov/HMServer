const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
    adressID: {
        type: String,
        required: true
    },
    support: {
        type: number,
        required: true,
    },
    lift: {
        type: number
    },
    animal:{
        type:number
    },
    repair: {
        type: number,
    },
});

module.exports = mongoose.model("Fees", FeeSchema)