const userRouter = require('express').Router();

userRouter.get('/', (req, res) => {
  res.send('Users route is live...');
})

module.exports = userRouter