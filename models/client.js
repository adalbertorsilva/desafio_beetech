const mongoose = require('mongoose')
const { Model, Schema } = mongoose

const clientSchema = new Schema({
  areaCode: Number,
  name: String,
  email: String
})

class Client extends Model {
  constructor (areaCode, name, email) {
    super()
    this.areaCode = areaCode
    this.name = name
    this.email = email
  }
}

module.exports = mongoose.model(Client, clientSchema)
