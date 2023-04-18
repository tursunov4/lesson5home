import { createRouter, createWebHistory } from 'vue-router'
import UsersApp from '../Pages/UsersApp.vue'
import PostsApp from '../Pages/PostsApp.vue'
import TodosApp from '../Pages/TodosApp.vue'
const routes = [
  {
    path :'/',
    name : 'users',
    component : UsersApp
  },
  {
    path:'/posts',
    name:'posts', 
    component:PostsApp
  },
  {
    path:'/todo',
    name :'todo',
    component:TodosApp
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
