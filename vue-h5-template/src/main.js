import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/apis'
import '@/utils/util'
import '@/utils/filter'
import '@/scss/index.scss'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
