const KoaRouter = require('koa-router')
const KoaBody = require('koa-body')
const mongoose = require('mongoose')

const router = KoaRouter()
const body = KoaBody()
const { DATABASE_NAME } = process.env

mongoose.connect(`mongodb://mongodb:27017/${DATABASE_NAME}` , { useMongoClient: true })
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
