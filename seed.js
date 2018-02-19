const Call = require('./models/call')
const Plan = require('./models/plan')

const call1 = new Call(11, 16, 1.9)
const call2 = new Call(16, 11, 2.9)
const call3 = new Call(11, 17, 1.7)
const call4 = new Call(17, 11, 2.7)
const call5 = new Call(11, 18, 0.9)
const call6 = new Call(18, 11, 1.9)

const plan1 = new Plan(30)
const plan2 = new Plan(60)
const plan3 = new Plan(120)

const createCalls = () => {
  Call.remove({})
    .then(() => Plan.remove({}))
    .then(() => {
      Call.create(call1, call2, call3, call4, call5, call6)
      Plan.create(plan1, plan2, plan3)
    })
}

module.exports = createCalls
