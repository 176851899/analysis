/*
 * @Author: Ren Bing
 * @Date: 2022-11-08 09:53:52
 * @LastEditors: Ren Bing
 * @LastEditTime: 2023-08-23 17:53:26
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

setTimeout(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
},3000)
