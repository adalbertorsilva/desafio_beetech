class Simulation {
  constructor (plan, call, duration) {
    this.plan = plan
    this.call = call
    this.duration = duration
  }

  calculateValueWithoutAPlan () {
    return this.duration * this.call.valuePerMinute
  }

  calculatePercentage (value, percentage) {
    return value * percentage / 100
  }

  calculateSurplusValue () {
    const surplusMinutes = this.duration - this.plan.minutes
    const surplusValue = surplusMinutes * this.call.valuePerMinute
    return surplusValue + this.calculatePercentage(surplusValue, 10)
  }

  calculateCallValue () {
    if (!this.plan) {
      return this.calculateValueWithoutAPlan()
    }

    if (this.plan.minutes > this.duration) {
      return 0
    } else {
      return this.calculateSurplusValue()
    }
  }

  runSimulation () {
    if (!this.call || !this.duration) {
      return 0
    }

    return this.calculateCallValue()
  }
}

module.exports = Simulation
