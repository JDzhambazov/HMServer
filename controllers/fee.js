const Fees = require('../models/feesmodel');

const saveFee = async (req, res) => {
    const fee= {
        addressID,
        support,
        lift,
        animal,
        repair,
    } = req.body;

    const newFee = new Fees(fee)
    try{
        const addFee = await newFee.save()
        res.sendStatus(200).send(addFee)
    }catch{
        res.sendStatus(401)
        console.log(err)
    }
   
};

const getFee = async (req, res) => {
    const {addressID} = req.query.id
    const currentFee =await new Fees.findOne({addressID:addressID})
    res.send(currentFee)

}

module.exports = {
    saveFee,
    getFee
}
