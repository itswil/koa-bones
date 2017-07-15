const { seq, Sequelize } = require('../db')

const Test = seq.define('test', {
  name: { type: Sequelize.STRING },
})

module.exports = Test
