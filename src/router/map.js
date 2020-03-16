// router 導入使用這兩種寫法皆可
import home from '@/views/home'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  { path: '*', redirect: { name: 'home' } }
]
