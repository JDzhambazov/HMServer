const {Router} = require('express')
const{saveAdress, verifyAddress } = require('../controllers/adress');
// const{ verifyUser ,guestAccess , getUserStatus} = require('../controllers/adress');



const router = Router();

// router.get('/login',guestAccess,getUserStatus,(req,res)=>{

//     const error = req.query.error;

//     res.render('loginPage',{
//         isLoggedIn:req.isLoggedIn,
//         error
//     })
// });

router.post('/login',async(req,res)=>{
    // const {
    //     password,
    // } = req.body;

    // if (password.lenght < 8 ) {
    //     res.redirect('/login?error=Passoword is not corect')
    // }else{
      verifyAddress(req,res)
    //}

    
});

// router.get('/signup',guestAccess,getUserStatus,(req,res)=>{

//     const error = req.query.error ?'Username or Passwort is not valid':null;

//     res.render('registerPage',{
//         isLoggedIn:req.isLoggedIn,
//         error
//     })
// });

router.post('/signup', async (req, res) => {
    const {
        password,
        repeatPassword
    } = req.body;

    if (password.lenght < 5 || !password.match(/^[A-Za-z0-9]+$/)) {
        res.redirect('/signup?error=Incorect password length')
    } else if (password !== repeatPassword) {
        res.redirect('/signup?error=password and repeatPassword must by equal')
    } else {
    }
    saveAdress(req, res)
});

router.get('/logout',async (req,res)=>{
     res.clearCookie('aid').status(200).send({message:"LoggOut"})
    //res.clearCookie('User');
});

// router.get('/details',authAccess(),async(req,res)=>{
//     res.send('ok')
// })

module.exports = router