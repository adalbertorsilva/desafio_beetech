const Plan = require('../models/plan')

module.exports = (app) => {
  app.get('/plans', (req, res) => {
    Plan.find({})
      .then(plans => res.status(200).send(plans))
  })
}
