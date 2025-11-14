import { http } from '@/utils/http'
import type { AddressParams } from '@/types/address'

//收货地址接口
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}
