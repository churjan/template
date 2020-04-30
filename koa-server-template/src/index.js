const koa = require('koa')
const app = new koa()
const Router = require('koa-router')

// 使用require-directory加载路由文件夹下的所有router
const requireDirectory = require('require-directory')

// 将所有的路由加载上,自动加载代码
const modules = requireDirectory(module, './apis', { visit: whenLoadModule })

function whenLoadModule(obj) {
	if (obj instanceof Router) {
		app.use(obj.routes(), obj.allowedMethods())
	}
}

app.listen(3000)
