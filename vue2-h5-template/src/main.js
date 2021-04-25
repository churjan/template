import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/apis'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'

Vue.use(Vant)

if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')