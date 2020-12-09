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
        res.status(200).send(addFee)
    }catch{
        res.sendStatus(401)
        console.log(err)
    }
   
};

const getFee = async (req, res) => {
    const addressID = req.params.id
    const currentFee =await Fees.findOne({addressID},{__v:0})
    res.send(currentFee)
}

const editFee = async (req,res)=>{
    const _id = req.params.id
    const fee ={
        addressID,
        support,
        lift,
        animal,
        repair
    } =req.body
    //console.log(fee)
    const updateFee =await Fees.findByIdAndUpdate(_id,fee,{__v:0})
    res.send(updateFee)
}
module.exports = {
    saveFee,
    getFee,
    editFee
}
