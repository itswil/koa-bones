const { seq, Sequelize } = require('../db')

const User = seq.define('user', {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
})

module.exports = User
