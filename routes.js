const KoaRouter = require('koa-router')

const router = KoaRouter()

router
  .get('/', async (ctx, next) => {
    return ctx.render('views/homepage')
  })
  .get('/about', async (ctx, next) => {
    return ctx.render('views/about')
  })

module.exports = router
