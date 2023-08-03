/*
 * @Author: Ren Bing
 * @Date: 2022-11-08 09:53:52
 * @LastEditors: Ren Bing
 * @LastEditTime: 2023-08-03 17:31:31
 * @Description: 请填写简介
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 是否取用mock
import  './utils/mockoff' 

Vue.config.productionTip = false

setTimeout(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
},3000)
