const Simulation = require('../models/simulation')
const Call = require('../models/call')
const Plan = require('../models/plan')

class SimulationController {
  async runSimulation (req, res) {
    const plan = req.body.plan ? await Plan.findById(req.body.plan) : null
    const call = await Call.findOne({origin: req.body.origin, destiny: req.body.destiny})
    const simulation = new Simulation(plan, call, req.body.duration)
    const responseObject = {callValue: simulation.runSimulation(), showClientModal: !call}
    res.status(200).send(responseObject)
  }
}

module.exports = SimulationController
