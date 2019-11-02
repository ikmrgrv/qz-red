// importing core dependencies
const express = require('express');
const app = express();

// middlewares
app.use(require('cookie-parser')('KUMAR'));

// configs for application
const config = require('./config');
const port = process.env.PORT || config.PORT 


app.get('/', (req, res) => {
  res.send("Welcome to QZ-RED !!!")
})

// routers
app.use('/user',  require('./routers/user'));
app.use('/event', require('./routers/event'));

// application initialization
app.listen(port, () => {
  console.log(`QZ-Red app started listening at port ${port}`)
})