import Home from '@/views/Home'
import About from '@/views/About'
import Article from '@/views/Article'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import Add from '@/views/Admin/add.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/add',
        name: 'Add',
        component: Add
      }
    ]
  },
  { path: '*', redirect: { name: 'home' } }
]
