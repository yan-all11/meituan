import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeOne from './../views/HomeOne.vue'
import Mine from './../views/MineOne.vue'
import Test1 from './../views/Test1.vue'
import Error from './../views/Error.vue'

const routes = [
  {
    path:"/home",
    name:"home",
    component:HomeOne,
    children:[
      {
        path:'test1',
        component:Test1
      }
    ]
  },
  {
    path: '/mine/:name/:age',
    name: 'Mine',
    component: Mine
  },{
    path:'/*',
    name:"Error",
    component:Error
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
