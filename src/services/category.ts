import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

//分类一级列表数据接口
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
