import axios from 'axios'
import { getStore } from '/utils/storage'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
axios.interceptors.request.use((config) => {
  const userInfo = getStore('userInfo')
  if (userInfo !== undefined && userInfo !== null && userInfo !== '') {
    const info = JSON.parse(userInfo)
    config.headers.Authorization = info.info.token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params}).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
