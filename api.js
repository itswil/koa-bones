const KoaRouter = require('koa-router')
const KoaBody = require('koa-body')
const Sequelize = require('sequelize')

const router = KoaRouter()
const body = KoaBody()
const { DB_NAME, DB_PORT } = process.env

const sequelize = new Sequelize(`mysql://user:password@db:${DB_PORT}/${DB_NAME}`);

const User = sequelize.define('user', {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
})

router
  .get('/api/employees', async (ctx, next) => {
    const response = {
      employees: [
        {name: 'John'},
        {name: 'Mary'},
      ]
    }
    ctx.body = response
  })
  .get('/api/dbsave', async (ctx, next) => {
    await sequelize.sync()
    const user = await User.create({ name: 'John', email: 'john@example.com' })

    ctx.body = `${user.name} (${user.email}) has been saved to the database`
  })

module.exports = router
