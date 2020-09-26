import request from '@/utils/request'

export function getToken () {
  return request({
    url: '/token', // 上传接口
    method: 'get'
  })
}
