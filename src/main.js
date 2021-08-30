import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import axios from 'axios'
import '@/web-components/index'
import App from './App'
import Home from '@/components/Home'
import About from '@/components/About'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ]
})

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      commit('increment')
    }
  }
})

const app = createApp(App)
app.config.globalProperties.$http = axios

app.use(router)
  .use(store)
  .mount('#app')
