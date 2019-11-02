const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
  res.send('Users route is live...');

  // TODO
  // if signed in -> send user details
  // else -> send unauthorized status
})

userRouter.post('/signin', (req, res) => {
  // TODO
  // signin user
})

userRouter.get('/signout', (req, res) => {
  // TODO
  // signout user

  // learning
  console.log(['normal cookies', req.cookies])
  console.log(['signed cookies', req.signedCookies])
  res
    .cookie('uuid', '1234', {
      signed: true
    })
    .clearCookie('cookie-name-to-be-cleared')
    .status(418)
    .json({
      status: 400,
      body: {
        message: 'Hi Batman'
      }
    })
})

userRouter.post('/singup', (req, res) => {
  // TODO
  // singup user
})

userRouter.post('/updateSettings', (req, res) => {
  // TODO
  // if signed in -> update user settings
  // else -> send unauthorised status
})

module.exports = userRouter