const context = require.context('/', false, /\.api\.js$/)
const apis = {}
context.keys().forEach(name => {
	let key = name.replace(/^\.\//, '').replace(/\.api\.js$/, '')
	apis[key] = context(name)
})

export default apis
