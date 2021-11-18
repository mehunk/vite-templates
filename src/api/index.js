import axios from 'axios'

export const instance = axios.create({
  timeout: 5 * 1000 // 将请求超时时间设置为 5 秒
})

instance.interceptors.response.use(response => {
  // 在此实现响应统一处理逻辑
  const res = response.data
  return res.data
}, error => {
  return Promise.reject(error)
})
