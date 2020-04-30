const Router = require('koa-router')
const router = new Router()
router.post('/mock/pageList', (ctx, next) => {
	ctx.body = {
		status: 200,
		message: '操作成功',
		data: [
			{
				label: '数据1',
				value: '值1',
			},
			{
				label: '数据2',
				value: '值2',
			},
			{
				label: '数据3',
				value: '值3',
			},
			{
				label: '数据4',
				value: '值4',
			},
		],
		pageSize: 10,
		pageNum: 1,
		total: 4,
	}
})
module.exports = router
