import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

type HotParams = PageParams & { subType?: string }
// 通用的热门推荐数据类型
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http({
    method: 'GET',
    url,
  })
}
