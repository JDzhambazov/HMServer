const { Router } = require('express')
const {saveMessage,deleteMessage,editMessage,getAllMessages} =require('../controllers/post')


const router = Router();

router.post('/message/all', async (req,res) =>{
    getAllMessages(req,res)
});

router.post('/message/new', async (req, res) => {
    saveMessage(req, res)
});

router.get('/message/delete/:id', async (req,res) =>{
    deleteMessage(req,res)
})
router.post('/message/edit/:id', async (req,res) =>{
    editMessage(req,res)
})



module.exports = router