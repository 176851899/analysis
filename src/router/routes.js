// import Analysis from '../views/Analysis.vue'
// import Screen from '../views/Screen.vue'
const Analysis = () => import('@/views/Analysis')
const Screen = () => import('@/views/Screen')

const routes = [
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
]

export default routes
