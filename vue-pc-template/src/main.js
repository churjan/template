import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/apis'
import utils from '@/utils'
Vue.prototype.$utils = utils
import '@/filters'
import './plugins/element'
import '@/scss/index.scss'

if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
