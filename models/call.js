const mongoose = require('mongoose')
const { Model, Schema } = mongoose

const callSchema = new Schema({
  origin: Number,
  destiny: Number,
  valuePerMinute: Number
})

class Call extends Model {
  constructor (origin, destiny, valuePerMinute) {
    super()
    this.origin = origin
    this.destiny = destiny
    this.valuePerMinute = valuePerMinute
  }

  // getOrigin () {
  //   return this.origin
  // }

  // getDestiny () {
  //   return this.destiny
  // }

  getValuePerMinute () {
    return this.valuePerMinute
  }
}

module.exports = mongoose.model(Call, callSchema)
