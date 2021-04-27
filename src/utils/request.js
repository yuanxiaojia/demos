import axios from 'axios'

//  让请求在浏览器中允许跨域携带cookie
axios.defaults.withCredentials = true

// 创建实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 1000,
})

export default service

