import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppPosts from '../components/AppPosts.vue'
import SinglePost from '../components/SinglePost.vue'
import AddPost from '../components/AddPost.vue'




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
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: SinglePost
  },
  {
    path: '/add',
    name: 'Add',
    component: AddPost
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
