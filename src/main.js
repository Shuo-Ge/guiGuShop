import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式文件
import '@/assets/css/globle.css'
import '@/assets/css/reset.css'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
