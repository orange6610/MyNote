import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/views/Home/Home.vue'
import MyUser from '@/views/User/User.vue'
import MyLogin from '@/views/Login/Login.vue'
import MyLogined from '@/views/Login/Logined.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: MyLogin },
    { path: '/login', component: MyLogin },
    { path: '/logined', component: MyLogined },
    { path: '/home', component: MyHome },
    { path: '/user', component: MyUser }
  ]
})
router.beforeEach((to, from, next) => {
  // to是将要访问的路由的信息对象
  // console.log(to)
  // from是将要离开的路由的信息对象
  // next函数表示放行的意思 不写一个也不能放行
  // next()
  // 判断用户要到达的hash地址是否等于/main 等于则要登录才能访问 不等于直接放行不需要登录
  // 读取localStorage中的token值
  const token = localStorage.getItem('token')
  if (to.path === '/home' || to.path === '/user') {
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else if (to.path === '/login') {
    if (token) {
      next('/logined')
      // router.push('logined')
    } else {
      next('/login')
      // router.push('logined')
    }
  } else {
    next()
  }
})

export default router
