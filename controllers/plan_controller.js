const Plan = require('../models/plan')

class PlanController {
  getPlans (req, res) {
    Plan.find({}).then(plans => res.status(200).send(plans))
  }
}

module.exports = PlanController
