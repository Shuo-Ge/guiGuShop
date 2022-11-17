import { getGoodsInfo } from "@/api"
const state = {
  goodInfo: {

  }
}
const mutations = {
  GETDOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo
  }
}
const actions = {
  async getGoods({ commit }, skuId) {
    const res = await getGoodsInfo(skuId)

    if (res.code == 200) {
      commit("GETDOODINFO", res.data)
    }
  }
}
const getters = {
  categoryView() {
    return state.goodInfo.categoryView || {}
  },
  skuInfo() {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList() {
    return state.goodInfo.spuSaleAttrList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters,
}