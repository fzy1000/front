import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SendView from '../views/SendView.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

const routes = [
  {
    path: '/',
    name: 'default',
    component: () => import(/* webpackChunkName: "about" */ '../views/DefaultContainer.vue'),
    meta: {
      title: '标题',
      requireAuth: true
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: AboutView
      },
      // {
      //   path: '/dashboard',
      //   component: Dashboard,
      //   name: 'Dashboard'
      // },
      {
        path: '/send',
        component: SendView,
        name: 'Send',
      },
      // {
      //   path: '/recieve',
      //   component: Dashboard,
      //   name: 'Recieve'
      // }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
