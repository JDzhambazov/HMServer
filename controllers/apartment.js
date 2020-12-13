const Apartmant = require('../models/apartmantsmodel')
const Address = require('../models/adressmodel')

const addApartment = async (req, res) => {

    const apart = {
        addressID,
        apartment,
        lift,
        people,
        animal
    } = req.body

    const newApartment = new Apartmant(apart);

    try {
        const currenApartment = await newApartment.save();

        await Address.findByIdAndUpdate(addressID, {
            $addToSet: {
                apartmentList: [currenApartment]
            }
        });

        const apartments = await Address.findById(addressID,{__v:0})
        .populate('apartmentList').lean()

         res.status(200).send(apartments.apartmentList)
  
    } catch {
        res.sendStatus(401);
        console.log(err)
    }
}

const editApartment = async (req, res) => {
    const _id = req.params.id
    const data = {
        addressID,
        apartment,
        lift,
        people,
        animal
    } = req.body

    try{
        const editApartment = await Apartmant.findByIdAndUpdate(_id, data, { __v: 0 });
        
        const apartments = await Address.findById(addressID,{__v:0})
        .populate('apartmentList').lean()
        res.status(200).send(apartments.apartmentList)

    }catch{
        res.sendStatus(401);
        console.log(err)
    }
}

module.exports = {
    addApartment,
    editApartment
}