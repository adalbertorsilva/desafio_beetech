const request = require('supertest')
const app = require('../../index')
const Plan = require('../../models/plan')

describe('Plan', () => {
  afterAll(async () => Plan.remove({}))

  describe("Test plan's find all route", () => {
    it('should return a 200 status and a list of objects', async () => {
      await Plan.create(new Plan(30), new Plan(60), new Plan(120))
      const response = await request(app)
        .get('/plans')
        .set('Accept', 'application/json')

      expect(response.statusCode).toBe(200)
      expect(response.body.length).toBeGreaterThan(0)
    })
  })
})
