const Adress = require('../models/adressmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { privateKey } = require('../secretConfig');

const generateToken = data => {
  const token = jwt.sign(data, privateKey)

  return token
}

const saveAdress = (req, res) => {
  const {
    username,
    password,
    city,
    street,
    number,
    entrance,
    apartments,
  } = req.body;

  console.log('adress')

  bcrypt.genSalt(10, async (err, salt) => {
    const hashPass = await bcrypt.hash(password, salt)
    const adress = new Adress({
      username,
      password:hashPass,
      city,
      street,
      number,
      entrance,
      apartments,
    })

    try {

      const newAdress = await adress.save();

      const token = jwt.sign({
        userID: newAdress._id,
        username: newAdress.username
      }, privateKey);

      //res.cookie('aid', token,{maxAge:3600000})
      res.cookie('aid', token)
      res.cookie('User', username)

      res.redirect('/')
    } catch (err) {
      console.log(err)
      //res.redirect('/signup?error=true')
    }

  });
};

// const verifyUser = async (req, res) => {
//   const {
//     username,
//     password,
//   } = req.body;

//   const user = await User.findOne({ username })

//   if (user !== null) {
//     const status = await bcrypt.compare(password, user.password);

//     if (status) {
//       const token = generateToken({
//         userID: user._id,
//         username: user.username
//       })

//       //res.cookie('aid', token,{maxAge:3600000})
//       res.cookie('aid', token)
//       res.cookie('User',username)
//       res.redirect('/')// {

//     } else {
//       res.redirect('/login?error=Wrong password')
//     }

//     return status;
//   } else {
//     res.redirect('/login?error=User is not exist')
//   }

// }

// const authAccess = (req, res, next) => {
//     const token = req.cookies['aid']
//     if (!token) {
//       return res.redirect('/')
//     }

//     try {
//       jwt.verify(token, privateKey)
//       next()
//     } catch(e) {
//       return res.redirect('/')
//     }
//   }

//   const authAccessJSON = (req, res, next) => {
//     const token = req.cookies['aid']
//     if (!token) {
//       return res.json({
//         error: "Not authenticated"
//       })
//     }

//     try {
//       jwt.verify(token, privateKey)
//       next()
//     } catch(e) {
//       return res.json({
//         error: "Not authenticated"
//       })
//     }
//   }

//   const guestAccess = (req, res, next) => {
//     const token = req.cookies['aid']
//     if (token) {
//       return res.redirect('/')
//     }
//     next()
//   }

//   const getUserStatus = (req, res, next) => {
//     const token = req.cookies['aid']
//     if (!token) {
//       req.isLoggedIn = false
//     }

//     try {
//       jwt.verify(token, privateKey)
//       req.isLoggedIn = true
//     } catch(e) {
//       req.isLoggedIn = false
//     }

//     next()
//   }

module.exports = {
  saveAdress,
  // verifyUser,
  // authAccess,
  // guestAccess,
  // getUserStatus,
  // authAccessJSON
}