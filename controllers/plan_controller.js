const Plan = require('../models/plan')

class PlanController {
  async getPlans (req, res) {
    const plans = await Plan.find({})
    res.status(200).send(plans)
  }
}

module.exports = PlanController
