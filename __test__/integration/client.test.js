const request = require('supertest')
const app = require('../../index')

describe('Client', () => {
  describe("Test client's create route", () => {
    it('should return a 201 status and a object', () => {
      const payload = {
        areaCode: 91,
        name: 'Adalberto Júnior',
        email: 'supercool@email.com'
      }

      return request(app)
        .post('/clients')
        .set('Accept', 'application/json')
        .send(payload)
        .then(response => {
          expect(response.statusCode).toBe(201)
          expect(response.body).toHaveProperty('_id')
          expect(response.body).toHaveProperty('areaCode', payload.areaCode)
          expect(response.body).toHaveProperty('name', payload.name)
          expect(response.body).toHaveProperty('email', payload.email)
        })
    })
  })
})
