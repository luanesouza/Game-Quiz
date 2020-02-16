const express = require('express')
var mongoose = require('mongoose');
const app = express()
const port_number = process.env.PORT || 9000;
app.use(express.json())
require('dotenv').config()
// this gives us access to the .env variables


// ------------ ESTABLISHING CONNECTION TO CLOUD DB --------------
mongoose.connect(`${process.env.DB_URL}`, {useUnifiedTopology: true, useNewUrlParser: true })


// ------------- DISPLAY AN ERROR MSG IF THE CONNCETION FAILS, OTHERWISE DISPLAYS 'DATABASE CONNECTED' --------------
const db = mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => console.log('Database Connected'))


// require('./models/User');
// User >—UQ—< Quiz >- Questions -< Answers/Options
//                                             |
//                                             ^
//                                          Explanation


app.get(`/`, (req, res) => {
  res.status(200).json({
    message: 'It works'
  })
})

const userRoute = require('./routers/userRouter')

app.use('/users', userRoute)

app.listen(port_number, () => console.log(`Server Listening on ${port_number}`))
