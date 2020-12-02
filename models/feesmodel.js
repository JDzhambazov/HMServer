const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
    addressID: {
        type: String,
        required: true
    },
    support: {
        type: Number,
        required: true,
    },
    lift: {
        type: Number
    },
    animal:{
        type:Number
    },
    repair: {
        type: Number,
    },
});

module.exports = mongoose.model("Fees", FeeSchema)