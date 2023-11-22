/*
 * @Author: Ren Bing
 * @Date: 2022-11-08 09:53:52
 * @LastEditors: Ren Bing
 * @LastEditTime: 2023-11-04 14:56:34
 * @Description: 请填写简介
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 是否取用mock
import  './utils/mockoff' 
// import VueWorker from 'vue-worker';
// Vue.use(VueWorker);
Vue.config.productionTip = false
// const all=require.context('@/views/DEMO', true, /\.vue$/);
// const arr=[]
// all.keys().forEach(name => {
//   // 获取文件中的 default 模块
//   // default相当于 import xxx from "./xxx/index.js" 中的xxx
//   const defaultObj = all(name).default
//   console.log(defaultObj,66,name)
//   const obj={
//     path: `/${defaultObj.name}`,
//     component:defaultObj
//   }
//   Vue.component(defaultObj.name,defaultObj)
//   // arr.push(obj)
// })
setTimeout(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
},3000)
