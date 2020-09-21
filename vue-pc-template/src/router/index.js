import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from '@/configs/routes'

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})
export default router
