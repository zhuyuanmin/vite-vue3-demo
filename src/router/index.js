import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import CitySelect from '@/pages/CitySelect'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/city', component: CitySelect }
  ]
})
