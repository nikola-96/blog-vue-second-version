import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppPosts from '../components/AppPosts.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: AppPosts
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
