const Balance = require('../models/balancemodel');

const addBalance = async () => {

    const addressBalance = new Balance([])
    balanceID = await (await addressBalance.save())._id
    return balanceID
}

const createEmptyYearBalance = async ({ address }) => {

    const date = new Date().getFullYear().toString()
    const newBalans = {
        year: date,
        income: [],
        cost: []
    }

    for (let i = 0; i < address.apartmentList.length; i++) {
        income[i] = {
            name: '',
            Apartment: '',
            Payment: createPayment()
        }
    }

    
    const currentBalance = await Balance.findById(_id)
    currentBalance.push(newBalans)

}

const createPayment = () => {
    let Payment = []
    for (let j = 1; j < 13; j++) {
        Payment[j] = {
            mount: j,
            sum: 0,
            date: null
        }
    }
    return Payment
}

module.exports = {
    addBalance,
    createEmptyYearBalance
}