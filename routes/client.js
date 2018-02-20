const ClientController = require('../controllers/client_controller')

const clientController = new ClientController()

module.exports = (app) => {
  app.post('/clients', clientController.createClient)
}
