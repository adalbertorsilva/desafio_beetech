const mongoose = require('mongoose')
const { Model, Schema } = mongoose

const planSchema = new Schema({
  minutes: Number
})

class Plan extends Model {
  constructor (minutes) {
    super()
    this.minutes = minutes
  }

  getMinutes () {
    return this.minutes
  }
}

module.exports = mongoose.model(Plan, planSchema)
