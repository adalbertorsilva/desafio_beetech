const request = require('supertest')
const app = require('../../index')
const Plan = require('../../models/plan')

describe('Plan', () => {
  beforeAll(() => Plan.create(new Plan(30), new Plan(60), new Plan(120)))
  afterAll(() => Plan.remove({}))

  describe("Test plan's find all route", () => {
    it('should return a 200 status and a list of objects', () => {
      return request(app)
        .get('/plans')
        .set('Accept', 'application/json')
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body.length).toBeGreaterThan(0)
        })
    })
  })
})
