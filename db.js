const Sequelize = require('sequelize')

const { DB_NAME, DB_PORT } = process.env

const seq = new Sequelize(`mysql://user:password@db:${DB_PORT}/${DB_NAME}`);

module.exports = {
  seq,
  Sequelize
}
