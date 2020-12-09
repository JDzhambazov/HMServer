const Adress = require('../models/adressmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { privateKey } = require('../secretConfig');


const generateToken = data => {
  return jwt.sign(data, privateKey, { expiresIn: '1d' })
}

const saveAdress = async (req, res) => {
  const address = {
    username,
    password,
    city,
    street,
    number,
    entrance,
    apartments,
  } = req.body;

  bcrypt.genSalt(10, async (err, salt) => {
    const hashPass = await bcrypt.hash(password, salt)
    const address = new Adress({
      username,
      password: hashPass,
      city,
      street,
      number,
      entrance,
      apartments,
    })

    try {

      const newAdress = await address.save();

      const token = jwt.sign({
        userID: newAdress._id,
        username: newAdress.username
      }, privateKey);

      //res.cookie('auth', token,{maxAge:3600000})
      res.cookie('auth', token)
      res.cookie('Address', username)
      res.status(200).send(newAdress)
      //res.redirect('/')
    } catch (err) {
      res.status(401).send(err)
      //res.redirect('/signup?error=true')
    }

  });
  //const adress = new Adress(address)

  // try {
  //   const newAdress = await adress.save();
  //   res.status(200).send(newAdress)
  // } catch (err) {
  //   res.status(401).send(err)
  //   console.log(err)
  // }
};

const verifyAddress = async (req, res) => {
  const {
    username,
    password
  } = req.body;

  const address = await Adress.findOne({ username },{__v:0})
  .populate('apartmentList').lean()

  if (address !== null) {
    const status = address.username === username
    if (status) {

      const token = generateToken({
        addressID: address._id,
        username: address.username
      })

      res.cookie('auth', token)
      res.cookie('Address', username)
      res.send(address)
    } else {
      res.redirect('/login?error=Wrong password')
    }

    return status;
  } else {
    res.redirect('/login?error=User is not exist')
  }

}

const authAccess = async (req, res) => {
  try {
    const token = req.cookies['auth']
    const address = req.cookies['Address']
    const currentAddress = await Adress.findOne({ username: address },{__v:0})
    .populate('apartmentList').lean()
    //jwt.verify(token, privateKey)
    res.send(currentAddress)
  } catch (e) {
    res.send(false)
  }
}


module.exports = {
  saveAdress,
  verifyAddress,
  authAccess
}