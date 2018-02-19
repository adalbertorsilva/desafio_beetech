const Call = require('../../models/call')
const Plan = require('../../models/plan')
const Simulation = require('../../models/simulation')

describe('Simulation', () => {
  const callFrom011To016 = new Call(11, 16, 1.9)
  const plan = new Plan(30)
  describe("Must calculate the value of call when it doesn't have a plan it spend 10 minutes from 011 to 016", () => {
    const simulation = new Simulation(null, callFrom011To016, 10)

    it('it must return 19', () => {
      expect(simulation.runSimulation()).toBe(19)
    })
  })

  describe('Must calculate the value of call when it has a 30 minutes plan and spend 10 minutes from 011 to 016', () => {
    const simulation = new Simulation(plan, callFrom011To016, 10)

    it('it must return 0', () => {
      expect(simulation.runSimulation()).toBe(0)
    })
  })

  describe('Must calculate the value of call when it has a 30 minutes plan and spend 40 minutes from 011 to 016', () => {
    const simulation = new Simulation(plan, callFrom011To016, 40)

    it('it must return 0', () => {
      expect(simulation.runSimulation()).toBe(20.9)
    })
  })

  describe('Must calculate the value of a simulation without a call', () => {
    const simulation = new Simulation(plan, null, 40)

    it('it must return 0', () => {
      expect(simulation.runSimulation()).toBe(0)
    })
  })

  describe('Must calculate the value of a simulation without a duration', () => {
    const simulation = new Simulation(plan, callFrom011To016, null)

    it('it must return 0', () => {
      expect(simulation.runSimulation()).toBe(0)
    })
  })
})
