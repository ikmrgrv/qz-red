const express = require('express');
const app = express();
const config = require('./config');

const port = process.env.PORT || config.PORT 

const userRouter = require('./routers/user')
const eventRouter = require('./routers/event')

app.get('/', (req, res) => {
  res.send("Welcome to QZ-RED !!!")
})

app.use('/user', userRouter);
app.use('/event', eventRouter);


app.listen(port, () => {
  console.log(`QZ-Red app started listening at port ${port}`)
})