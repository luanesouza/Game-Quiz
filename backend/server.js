const express = require('express')
var mongoose = require('mongoose');
const app = express()
const port_number = process.env.PORT || 9000;
const userRoute = require('./routers/userRouter')
const quizRoute = require('./routers/quizRouter')
require('./models/UserModel');
require('dotenv').config()
// ^ gives us access to the .env variables

app.use(express.json())


// ------------ ESTABLISHING CONNECTION TO CLOUD DB --------------
mongoose.connect(`${process.env.DB_URL}`, {useUnifiedTopology: true, useNewUrlParser: true })


// ------------- DISPLAY AN ERROR MSG IF THE CONNCETION FAILS, OTHERWISE DISPLAYS 'DATABASE CONNECTED' --------------
const db = mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => console.log('Database Connected'))


// User >—UQ—< Quiz >- Questions -< Answers/Options
//                                             |
//                                             ^
//                                      Explanation



app.use('/', userRoute)
app.use('/', quizRoute)

app.listen(port_number, () => console.log(`Server Listening on ${port_number}`))
