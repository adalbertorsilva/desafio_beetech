const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const Call = require('./models/call')

mongoose.connect(process.env.DB_CONNECTION_URL)

const call = new Call(91, 11, 1)
call.save()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, () => {
  console.log('SERVER UP !!!!')
})
