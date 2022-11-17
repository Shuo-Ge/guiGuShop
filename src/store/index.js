import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './home/home'
import search from './search/search'
import detail from './detail/detail'
export default new Vuex.Store({
  modules: {
    home,
    search,
    detail
  }
})
