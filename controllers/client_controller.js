const Client = require('../models/client')

class ClientController {
  createClient (req, res) {
    const client = new Client(req.body.areaCode, req.body.name, req.body.email)
    client.save().then(persistedClient => res.status(201).send(persistedClient))
  }
}

module.exports = ClientController
