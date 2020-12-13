const {Router} = require('express')
const{getYears,getIncomesByYear,getCostsByYear,getYearAmmount} =require('../controllers/expences')

const router = Router();

router.get('/expences',async(req,res)=>{
    getYears(req,res)
})

router.get('/expences/:year',async(req,res)=>{
    getYearAmmount(req,res)
})

router.get('/expences/incomme/:year',async(req,res)=>{
    getIncomesByYear(req,res)
})

router.get('/expences/coast/:year',async(req,res)=>{
    getCostsByYear(req,res)
})

module.exports = router