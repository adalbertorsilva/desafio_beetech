const Client = require('../models/client')

class ClientController {
  async createClient (req, res) {
    const client = new Client(req.body.areaCode, req.body.name, req.body.email)
    const persistedClient = await client.save()
    res.status(201).send(persistedClient)
  }
}

module.exports = ClientController
