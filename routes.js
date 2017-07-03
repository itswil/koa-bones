const KoaRouter = require('koa-router')

const router = KoaRouter()

router
  .get('/', async (ctx, next) => {
    ctx.render('views/homepage')
  })
  .get('/about', async (ctx, next) => {
    ctx.render('views/about')
  })

module.exports = router
