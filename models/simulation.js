class Simulation {
  constructor (plan, call, duration) {
    this.plan = plan
    this.call = call
    this.duration = duration
  }

  calculatePercentage (value, percentage) {
    return value * percentage / 100
  }

  calculateSurplusValue () {
    const surplusMinutes = this.duration - this.plan.getMinutes()
    const surplusValue = surplusMinutes * this.call.getValuePerMinute()
    return surplusValue + this.calculatePercentage(surplusValue, 10)
  }

  calculateValueWithoutAPlan () {
    return this.duration * this.call.valuePerMinute
  }

  calculateValueWithAPlan () {
    return this.plan.getMinutes() > this.duration ? 0 : this.calculateSurplusValue()
  }

  calculateCallValue () {
    return !this.plan ? this.calculateValueWithoutAPlan() : this.calculateValueWithAPlan()
  }

  runSimulation () {
    return (!this.call || !this.duration) ? 0 : this.calculateCallValue()
  }
}

module.exports = Simulation
