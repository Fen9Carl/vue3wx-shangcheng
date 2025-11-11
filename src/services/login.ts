import { http } from '@/utils/http'
import type { LoginResult } from '@/types/member'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

//小程序登录数据接口
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

//小程序登录内测版本(phoneNumber为模拟手机号)
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
