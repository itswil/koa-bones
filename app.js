const Koa = require('koa')
const KoaViews = require('koa-views')
const KoaStatic = require('koa-static')

const router = require('./routes')
const api = require('./api')

const app = new Koa()

app.use(KoaStatic('static'))
app.use(KoaViews(__dirname, { map: { html: 'nunjucks' }} ))

app.use(async (ctx, next) => {
  try {
    await next()
    if (ctx.status === 404) {
        ctx.throw(404)
    }
  } catch (e) {
    ctx.status = e.status || 500
    const errorView = ctx.status === 404 ? 'views/404' : 'views/500'
    await ctx.render(errorView)
  }
})

app
  .use(router.routes())
  .use(api.routes())
  // .use(router.allowedMethods())

app.listen(3000)
console.log('Listening on http://localhost:3000')
