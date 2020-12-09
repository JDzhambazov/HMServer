const {Router} = require('express')
const{addApartment,editApartment } = require('../controllers/apartment');


const router = Router();

router.post('/apartment',async(req,res)=>{
    const {
        lift,
    }=req.body

    if(lift !== 0 || lift !==1){
        addApartment(req,res)
    }else{
        throw new Error("Lift value must be 0 or 1")
    }
});

router.post('/apartment/edit/:id',async(req,res)=>{
    console.log('edit mode')
    editApartment(req,res)
})


module.exports = router