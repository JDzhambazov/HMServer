const mongoose = require('mongoose');

const AdressSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    entrance: {
        type: String
    },
    apartments: {
        type: Number,
        required: true
    },
    apartmentList: [{
        apartment: {
            type: 'ObjectId',
            ref: 'Apartmant',
        }
    }],
    image: {
        type: String
    },
});

module.exports = mongoose.model("Adress", AdressSchema)