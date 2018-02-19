const Simulation = require('../models/simulation')
const Call = require('../models/call')
const Plan = require('../models/plan')

let plan

module.exports = (app) => {
  app.post('/simulations', (req, res) => {
    Plan.findById(req.body.plan)
      .then(retrievedPlan => {
        plan = retrievedPlan
        return Call.findOne({origin: req.body.origin, destiny: req.body.destiny})
      })
      .then(call => {
        const simulation = new Simulation(plan, call, req.body.duration)
        const responseObject = {
          callValue: simulation.runSimulation(),
          showClientModal: !call ? true : false
        }

        res.status(200).send(responseObject)
      })
  })
}
