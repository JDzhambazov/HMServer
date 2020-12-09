const { Router } = require('express')
const {getFee, saveFee, editFee } = require('../controllers/fee');




const router = Router();

router.get('/fee/:id', async (req,res) =>{
    getFee(req,res)
})

router.post('/fee/:id', async (req,res) =>{
    editFee(req,res)
})

router.post('/fee', async (req, res) => {
    saveFee(req, res)
});


module.exports = router