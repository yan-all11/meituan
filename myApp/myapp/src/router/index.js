import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Home/index.vue'
import Detail from '../views/detail/index.vue'

const routes = [
  {
    path:'/',
    name:'index',
    component:Index
  },
  {
    path:'/detail',
    name:'detail',
    component:Detail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
