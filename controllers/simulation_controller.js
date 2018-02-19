const Simulation = require('../models/simulation')
const Call = require('../models/call')
const Plan = require('../models/plan')

class SimulationController {
  runSimulation (req, res) {
    let plan

    return Plan.findById(req.body.plan)
      .then(retrievedPlan => {
        plan = retrievedPlan
        return Call.findOne({origin: req.body.origin, destiny: req.body.destiny})
      })
      .then(call => {
        const simulation = new Simulation(plan, call, req.body.duration)
        const responseObject = {
          callValue: simulation.runSimulation(),
          showClientModal: !call
        }

        res.status(200).send(responseObject)
      })
  }
}

module.exports = SimulationController
