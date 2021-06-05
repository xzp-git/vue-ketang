import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/index.vue";
import loadable from "@/utils/loadable.js";
import hook from "./hook";
Vue.use(VueRouter)
// 自动生成路由 不建议路由自动配置，可配置性较低(批注，钩子)
const routes = [
  {
    path:'/',
    name:'home',
    component:Home
  },
  {
    path:'/lesson',
    name:'lesson',
    component:loadable(() => import('@/views/lesson/index.vue')) //默认白屏 加载完去渲染
  },
  {
    path:'/profile',
    name:'profile',
    component:loadable(() => import('@/views/profile/index.vue'))
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
Object.values(hooks).forEach(hook => {
  router.beforeEach(hook)
})
export default router
