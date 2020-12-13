const mongoose = require('mongoose')

const BalanceSchema = new mongoose.Schema({
    balance: [{
        year: {
            type: String,
            //required: true
        },
        income: [
            {
                name: {
                    type: String
                },
                Apartment: {
                    type: String
                },
                Payment: [{
                    mount: {
                        type: Number
                    },
                    sum: {
                        type: Number
                    },
                    date: {
                        type: Date
                    }
                }]
            },
        ],
        cost: [
            {
                name: {
                    type: String
                },
                cost: {
                    type: Number
                }
            }
        ]
    }]
});

module.exports = mongoose.model("Balance", BalanceSchema)