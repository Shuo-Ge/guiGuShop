import { getGoodsInfo, addGoodsCurt } from "@/api"
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
  },
  // 将产品添加到购物车中
  async getGoodsCurt({ commit }, { skuId, SkuNum }) {
    const res = await addGoodsCurt(skuId, SkuNum)
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error("fail"))
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