class Call {
  constructor (origin, destiny, valuePerMinute) {
    this.origin = origin
    this.destiny = destiny
    this.valuePerMinute = valuePerMinute
  }

  getOrigin () {
    return this.origin
  }

  getDestiny () {
    return this.destiny
  }

  getValuePerMinute () {
    return this.valuePerMinute
  }
}

module.exports = Call
