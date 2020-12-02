const { Router } = require('express')
const {getFee, saveFee } = require('../controllers/fee');




const router = Router();

router.get('/fee/:id', async (req,res) =>{
    getFee(req,res)
})

router.post('/fee', async (req, res) => {
    saveFee(req, res)
});

module.exports = router