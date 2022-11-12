import { TypeNavApi, getBannnerApi, getFloorApi } from '@/api'

const state = {
    // 保存三级联动信息
    categoryList: [],
    // 保存轮播图信息
    bannerList: [],
    floorList: []
}
const mutations = {
    // 获取三级联动信息
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    // 获取轮播图信息
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const actions = {
    async categoryList({ commit }) {
        const res = await TypeNavApi()
        if (res.code == 200) {
            // console.log(res.data);
            commit("CATEGORYLIST", res.data)
        }
    },
    async getBannnerList({ commit }) {
        const res = await getBannnerApi()
        // console.log(res);
        if (res.code == 200) {
            commit("GETBANNERLIST", res.data)
        }
    },
    async getFloorList({ commit }) {
        const res = await getFloorApi()
        if (res.code == 200) {
            commit("GETFLOORLIST", res.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters,
}