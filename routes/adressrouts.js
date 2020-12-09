const {Router} = require('express')
const{saveAdress, verifyAddress,authAccess } = require('../controllers/adress');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = Router();

router.post('/login',async(req,res)=>{
    const {
        password,
    } = req.body;

    if (password.lenght < 5 ) {
        res.redirect('/login?error=Passoword is not corect')
    }else{
      verifyAddress(req,res)
    }

    
});

router.get('/auth', async(req,res) =>{
    authAccess(req,res)
})

// router.post('/verify', async(req,res)=>{
//     verifyAddress(req,res)
// })

router.post('/signup', async (req, res) => {
    const {
        password,
        repassword
    } = req.body;

    if (password.lenght < 5 || !password.match(/^[A-Za-z0-9]+$/)) {
        res.redirect('/signup?error=Incorect password length')
    } else if (password !== repassword) {
        res.redirect('/signup?error=password and repeatPassword must by equal')
    } else {
        saveAdress(req, res)
     }
});

router.get('/logout',async (req,res)=>{
    res.clearCookie('Address')
     res.clearCookie('auth').status(200).send({message:"LoggOut"})
});


module.exports = router