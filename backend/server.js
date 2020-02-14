const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

require('./models/User');
// User >—UQ—< Quiz >- Questions -< Answers/Options
//                                             |
//                                             ^
//                                          Explanation

app.listen(5000)
