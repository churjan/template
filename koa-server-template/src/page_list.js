const koa = require('koa')
const app = new koa()
const Router = require('koa-router')
const router = new Router()

router.get('/mock/pageList', (ctx, next) => {
	ctx.body = {
		status: 200,
		message: '操作成功',
		data: [
			{
				name: 'Churjan',
				age: 27,
			},
		],
		total: 7,
	}
})

app.use(router.routes())

app.listen(3000)
