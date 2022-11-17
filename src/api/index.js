import request from '@/api/request'
import mockRequest from '@/api/mockAjax'

// 获取三级联动的接口
export const TypeNavApi = () => request.get('/product/getBaseCategoryList')
// 获取轮播图
export const getBannnerApi = () => mockRequest.get('/banner')
export const getFloorApi = () => mockRequest.get('/floor')
// 搜索
export const getSearchApi = (params) => request({ url: '/list', method: 'post', data: params })
// 获取产品详情信息
export const getGoodsInfo = (skuId) => request.get(`/item/${skuId}`)



