import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home/Home')
const Login = () => import('@/views/Login/Login')
const Register = () => import('@/views/Register/Register')
const Search = () => import('@/views/Search/Search')

// 先把VueRouter复制保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { show: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
  {
    path: '/search/:keyWord',
    component: Search,
    meta: { show: true },
    name: "search"
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
