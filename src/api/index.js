import request from '@/api/request'
import mockRequest from '@/api/mockAjax'

// 获取三级联动的接口
export const TypeNavApi = () => request.get('/product/getBaseCategoryList')
export const getBannnerApi = () => mockRequest.get('/banner')
export const getFloorApi = () => mockRequest.get('/floor')
export const getSearchApi = (params) => request({ url: '/list', method: 'post', data: params })


