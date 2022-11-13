import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式文件
import '@/assets/css/globle.css'
import '@/assets/css/reset.css'

// 三级联动组件--全局组件
import TypeNav from '@/views/Home/TypeNav/TypeNav.vue'
// 引入轮播图组件
import Carousel from '@/components/Carousel/Carousel.vue'
// 第一个参数组件名字，第二个参数，那个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
// 引入mock
import '@/mock/mockSever.js'
// 引入swiper
import 'swiper/swiper-bundle.css'



Vue.config.productionTip = false

new Vue({
  // 全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
