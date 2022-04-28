import service from './service'
// 随axios引入的，无需自行引入 
import qs from 'qs'

export function GET_DATA(url, params) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}
// axios post数据时使用qs.stringify(data) 或者new URLSearchParams()来添加数据
export function POST_DATA(url, data) {
  return new Promise((resolve, reject) => {
    service.post(url, qs.stringify(data)).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}
