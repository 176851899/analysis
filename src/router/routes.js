
import Analysis from '../views/Analysis.vue'
import Screen from '../views/Screen.vue'
import q from '../views/q.vue'
const routes = [
  {
    path: '/analysis',
    name: 'Analysis',
    component: Analysis
  },
 
  {
    path: '/screen',
    name: 'Screen',
    component: Screen
  },

  {
    path: '*',
    redirect: '/analysis', // 重定向
  },

]

export default routes
