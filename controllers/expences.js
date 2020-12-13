const { Payments } = require('../data/year')
//const Address = require('../models/adressmodel')

const getYears = async (req, res) => {

    const years = Payments.map(y => y.year)

    try {
        if (!years) {
            //add current year
        } else {
            res.status(200).send(years)
        }
    } catch (err) {
        res.status(401).send(err)
    }
}

const getIncomesByYear = async (req, res) => {

}

const getCostsByYear = async (req, res) => {
}

const getYearAmmount =async (req,res) =>{

    const selectedYear=req.params.year

    try{

        const result = Payments.find(e => e.year===selectedYear)
        console.log(result)
        res.status(200).send(result)

    }catch (err){
        res.status(401).send(err)
    }
}



module.exports = {
    getYears,
    getIncomesByYear,
    getCostsByYear,
    getYearAmmount
}