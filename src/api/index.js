import request from '@/api/request'
import mockRequest from '@/api/mockAjax'

// 获取三级联动的接口
export const TypeNavApi = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'GET',

    })
}
export const getBannnerApi = () => mockRequest.get('/banner')
export const getFloorApi = () => mockRequest.get('/floor')



