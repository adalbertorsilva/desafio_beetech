const request = require('supertest')
const app = require('../../index')
const Plan = require('../../models/plan')
const Call = require('../../models/call')

describe('Simulation', () => {
  afterAll(() => {
    Call.remove({})
    Plan.remove({})
  })

  describe("Test simulation's execution with a plan", () => {
    it('should return a 200 status and a object', () => {
      return Plan.create(new Plan(30))
        .then(plan => {
          const payload = {
            plan: plan._id,
            origin: 11,
            destiny: 16,
            duration: 40
          }
          return request(app)
            .post('/simulations')
            .set('Accept', 'application/json')
            .send(payload)
        })
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toHaveProperty('callValue', 20.9)
          expect(response.body).toHaveProperty('showClientModal', false)
        })
    })
  })

  describe("Test simulation's execution without a plan", () => {
    it('should return a 200 status and a object', () => {
      const payload = {
        plan: null,
        origin: 11,
        destiny: 16,
        duration: 40
      }
      return request(app)
        .post('/simulations')
        .set('Accept', 'application/json')
        .send(payload)
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toHaveProperty('callValue', 76)
          expect(response.body).toHaveProperty('showClientModal', false)
        })
    })
  })

  describe("Test simulation's execution with a 30 minutes plan and duration is 10 minutes ", () => {
    it('should return a 200 status and a object', () => {
      return Plan.create(new Plan(30))
        .then(plan => {
          const payload = {
            plan: plan._id,
            origin: 11,
            destiny: 16,
            duration: 10
          }
          return request(app)
            .post('/simulations')
            .set('Accept', 'application/json')
            .send(payload)
        })
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toHaveProperty('callValue', 0)
          expect(response.body).toHaveProperty('showClientModal', false)
        })
    })
  })

  describe("Test simulation's execution without a registered call", () => {
    it('should return a 200 status and a object', () => {
      const payload = {
        plan: null,
        origin: 99,
        destiny: 16,
        duration: 40
      }
      return request(app)
        .post('/simulations')
        .set('Accept', 'application/json')
        .send(payload)
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toHaveProperty('callValue', 0)
          expect(response.body).toHaveProperty('showClientModal', true)
        })
    })
  })
})
