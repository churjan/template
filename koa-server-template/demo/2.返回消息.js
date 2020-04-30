const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
	await next()
	ctx.body = 'Hello World'
})

app.listen(3000)
