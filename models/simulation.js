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
    const surplusMinutes = this.duration - this.plan.getMinutes()
    const surplusValue = surplusMinutes * this.call.getValuePerMinute()
    return surplusValue + this.calculatePercentage(surplusValue, 10)
  }

  calculateVAlueWithAPlan () {
    if (this.plan.getMinutes() > this.duration) {
      return 0
    } else {
      return this.calculateSurplusValue()
    }
  }

  calculateCallValue () {
    if (!this.plan) {
      return this.calculateValueWithoutAPlan()
    }
    return this.calculateVAlueWithAPlan()
  }

  runSimulation () {
    if (!this.call || !this.duration) {
      return 0
    }

    return this.calculateCallValue()
  }
}

module.exports = Simulation
