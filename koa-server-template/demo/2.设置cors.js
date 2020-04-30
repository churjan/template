const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')

app.use(async (ctx, next) => {
	await next()
	ctx.body = 'Hello World'
})

// 跨域
const allowOrigins = [
	'http://localhost:8080', // 需要跨域的端口，与本服务器端口不一样，请注意。
]
app.use(
	cors({
		origin: function (ctx) {
			if (allowOrigins.includes(ctx.header.origin)) {
				return ctx.header.origin
			}
			return false
		},
		exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
		maxAge: 5,
		credentials: true,
		withCredentials: true,
		allowMethods: ['GET', 'POST', 'DELETE'],
		allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
	})
)

app.listen(3000)
