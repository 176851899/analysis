/*
 * @Author: Ren Bing
 * @Date: 2022-11-08 09:53:53
 * @LastEditors: Ren Bing
 * @LastEditTime: 2023-11-16 10:06:28
 * @Description: 请填写简介
 */
import Vue from 'vue'
import routes from './routes'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
