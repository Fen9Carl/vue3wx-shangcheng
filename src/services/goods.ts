import { http } from '@/utils/http'
import type { GoodsResult } from '@/types/goods'

//获取商品详情数据接口
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
