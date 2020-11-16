import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/apis'
import '@/utils'

import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
Vue.use(Lazyload)
Vue.use(Vant)

import 'lib-flexible/flexible'

import '@/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
