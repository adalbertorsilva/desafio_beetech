const request = require('supertest')
const app = require('../../index')
const Client = require('../../models/client')

describe('Client', () => {
  afterAll(async () => Client.remove({}))

  describe("Test client's create route", () => {
    it('should return a 201 status and a object', async () => {
      const payload = {
        areaCode: 91,
        name: 'Adalberto Júnior',
        email: 'supercool@email.com'
      }

      const response = await request(app)
        .post('/clients')
        .set('Accept', 'application/json')
        .send(payload)

      expect(response.statusCode).toBe(201)
      expect(response.body).toHaveProperty('_id')
      expect(response.body).toHaveProperty('areaCode', payload.areaCode)
      expect(response.body).toHaveProperty('name', payload.name)
      expect(response.body).toHaveProperty('email', payload.email)
    })
  })
})
