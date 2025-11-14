import { http } from '@/utils/http'
import type { AddressParams } from '@/types/address'
import type { AddressItem } from '@/types/address'

//添加收货地址接口
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

//获取收获地址接口
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

//获取收货地址详情
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}
