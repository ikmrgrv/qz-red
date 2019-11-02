const eventRouter = require('express').Router();

eventRouter.get('/', (req, res) => {
  res.send('Events route is live...');
})

module.exports = eventRouter