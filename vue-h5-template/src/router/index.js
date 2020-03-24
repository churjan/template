import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = []
const context = require.context('../views', false, /\.(route.js)$/)
context.keys().forEach(name => {
	routes.push(context(name).default)
})
const router = new VueRouter({
	mode: 'history',
	routes,
})
export default router
