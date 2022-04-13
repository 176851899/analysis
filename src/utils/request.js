/* axios 二次封装 */
import axios from 'axios'
// 基本 URL
// const baseURL = process.env.NODE_ENV === 'development' ? '开发测试URL' : '真实URL'
// const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:80' : '真实接口baseurl'
// 创建 axios 实例
const service = axios.create({
//   baseURL, // 基准的 URL 路径
  timeout: 3000, // 超时时间
})

// 请求拦截
service.interceptors.request.use(config => {
  // 通常在请求拦截时，会向请求头中添加 token 认证字段的传递.
//   config.headers['x-token'] = ''
  return config

})

// 响应拦截
service.interceptors.response.use(response => {


  // 判断处理响应数据
  if (response.status >= 200 && response.status < 300) {
    // 获取从后端响应回前端的数据对象
    const resData = response.data
    // 后端返回的数据结构统一为 {code, data}
    if (resData.code === 200) {
      return resData
    }
  }

  const err = new Error('请求出现异常')
  err.error = response // 添加一个自定义的属性，表示具体的错误信息
  return Promise.reject(err)
})

// 导出
export default service
