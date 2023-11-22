/*
 * @Author: Ren Bing
 * @Date: 2022-11-08 09:53:53
 * @LastEditors: Ren Bing
 * @LastEditTime: 2023-11-16 09:45:50
 * @Description: 请填写简介
 */
// import Analysis from '../views/Analysis.vue'
// import Screen from '../views/Screen.vue'
const Analysis = () => import('@/views/Analysis')
const Screen = () => import('@/views/Screen')
const all=require.context('@/views/DEMO', true, /\.vue$/);
const arr=[]
all.keys().forEach(name => {
  // 获取文件中的 default 模块
  // default相当于 import xxx from "./xxx/index.js" 中的xxx
  const defaultObj = all(name).default
  console.log(defaultObj,66,name)
  const obj={
    path: `/${defaultObj.name}`,
  //  component: import('@/'),
    component: ()=>import('@/views/DEMO/'+name.replace(/(\.\/|\.vue)/g, '')),

  }
  arr.push(obj)
})
// console.log(arr,66,import('@/views/Analysis'))
const routes = [
  {
    path: '/',
    // 嵌套路由
    component: () => import('@/views/ScreenY.vue'),
  },
  {
    path: '/pag',
    // 嵌套路由
    component: () => import('@/views/Transition.vue'),
    children: [{
        path: '/pag/analysis',
        name: 'Analysis',
        component: Analysis
      },
      {
        path: '/pag/screen',
        name: 'Screen',
        component: Screen
      },
      {
        path: '/pag/demo',
        name: 'Demo',
        component: () => import('@/views/Demo.vue'),
      },
      {
        path: '/pag',
        redirect: '/pag/analysis', // 重定向
      },
    ]
  },
  {
    path: '*',
    redirect: '/pag', // 重定向
    // component:()=>import('../views/404.vue')
  },
  ...arr
]
console.log(routes,66)
export default routes
