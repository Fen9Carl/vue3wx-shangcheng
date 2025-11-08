import { http } from '@/utils/http'

//获取商品详情数据接口
export const getGoodsByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
