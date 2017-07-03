const KoaRouter = require('koa-router')
const KoaBody = require('koa-body')

const api = KoaRouter()
const body = KoaBody()

api
  .get('/api/employees', async (ctx, next) => {
    const response = {
      employees: [
        {name: 'John'},
        {name: 'Mary'},
      ]
    }
    ctx.body = response
  })

module.exports = api
