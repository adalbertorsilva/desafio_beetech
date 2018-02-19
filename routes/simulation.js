const SimulationController = require('../controllers/simulation_controller')

const simulationController = new SimulationController()

module.exports = (app) => {
  app.post('/simulations', simulationController.runSimulation)
}
