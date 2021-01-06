import Vue from 'vue'
import App from './App'

import store from '@/store'
Vue.prototype.$store = store

import apis from '@/apis'
Vue.prototype.$apis=apis

Vue.config.productionTip = false
App.mpType = 'app'

import uView from 'uview-ui'
Vue.use(uView)

import '@/mock'

const app = new Vue({
	store,
	...App
})
app.$mount()
