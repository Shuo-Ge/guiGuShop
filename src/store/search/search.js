import { getSearchApi } from '@/api'
const state = {
    searchList: {}
}
const mutations = {
    CREATESEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({ commit }, params) {
        const res = await getSearchApi(params)
        if (res.code == 200) {
            commit("CREATESEARCHLIST", res.data)
        }
    }
}
// 简化仓库里的数据
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
}