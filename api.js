const KoaRouter = require('koa-router')
const KoaBody = require('koa-body')
const mongoose = require('mongoose')

const CONFIG = require('./config')

const router = KoaRouter()
const body = KoaBody()
mongoose.connect(CONFIG.mongoPath + CONFIG.databaseName, { useMongoClient: true })
mongoose.Promise = global.Promise

const userSchema = new mongoose.Schema({
  name: String,
  email: String
})

const User = mongoose.model('User', userSchema)

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
    const user = new User({
      name: 'John',
      email: 'john@example.com'
    })

    await user.save()
    ctx.body = 'OK'
  })

module.exports = router
