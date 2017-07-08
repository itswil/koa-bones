const KoaRouter = require('koa-router')
const KoaBody = require('koa-body')

const { seq, Sequelize } = require('./db')
const User = require('./models/user-model')

const router = KoaRouter()
const body = KoaBody()

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
    await seq.sync()
    const user = await User.create({ name: 'John', email: 'john@example.com' })

    ctx.body = `${user.name} (${user.email}) has been saved to the database`
  })

module.exports = router
