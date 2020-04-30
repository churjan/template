const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyParser()) // 解析request的body

const router = require('koa-router')()
router.get('/', async (ctx, next) => {
	// todo
})
app.use(router.routes())
app.listen(3000)
