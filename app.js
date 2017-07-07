const Koa = require('koa')
const KoaViews = require('koa-views')
const KoaStatic = require('koa-static')

const appRouter = require('./routes')
const apiRouter = require('./api')

const app = new Koa()
const { NODE_ENV } = process.env

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
  .use(appRouter.routes())
  .use(apiRouter.routes())
  // .use(router.allowedMethods())

app.listen(3000)
const serverMsg = NODE_ENV === 'development' ? 'Development' : 'Production'
console.log(serverMsg + ' server: http://localhost:3000')
