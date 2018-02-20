const Simulation = require('../models/simulation')
const Call = require('../models/call')
const Plan = require('../models/plan')

class SimulationController {
  async runSimulation (req, res) {
    const plan = await Plan.findById(req.body.plan)

    console.log('O QUE CHEGOU ??????????????? ', req.body)

    const call = await Call.findOne({origin: req.body.origin, destiny: req.body.destiny})
    const simulation = new Simulation(plan, call, req.body.duration)
    const responseObject = {
      callValue: simulation.runSimulation(),
      showClientModal: !call
    }
    res.status(200).send(responseObject)
  }
}

module.exports = SimulationController
