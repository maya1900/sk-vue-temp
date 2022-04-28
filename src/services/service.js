import axios from 'axios'

// 创建axios实例
const service = axios.create(null)
service.defaults.timeout = 50000
// 设置form头属性
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 切换环境
if (process.env.NODE_ENV === 'development') {
  service.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  service.defaults.baseURL = '/'
}

service.interceptors.request.use(config => {
  // 统一请求头处理
  // const token = 'token'
  // token && (config.headers.Authorization = token)
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response)
  }
}, error => {
  if (error.response && error.response.status) {
    switch (error.response.status) {
      // 401： 未登录
      case 401:
        console.log("跳转登录")
        break;
      // 403： token过期
      case 403:
        console.log("token过期，跳转登录")
        // 清除token
        break;
      case 404:
        console.log("请求资源不存在")
        break;
      default:
        console.log("其他错误")
    }
    return Promise.reject(error.response)
  } else {
    return Promise.reject(error.message)
  }
})

export default service
