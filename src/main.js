import { createApp } from 'vue'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
import '@/web-components/index'

import 'virtual:svg-icons-register'

import App from './App'
import SvgIcon from './components/SvgIcon'


const app = createApp(App)
app.config.globalProperties.$http = axios

app.component('svg-icon', SvgIcon)

app.use(router)
  .use(store)
  .mount('#app')
