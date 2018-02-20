const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const seed = require('./seed')

mongoose.connect(process.env.DB_CONNECTION_URL)
seed()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

require('./routes/plan')(app)
require('./routes/client')(app)
require('./routes/simulation')(app)

module.exports = app
