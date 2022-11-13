import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// vue add tailwind
import './assets/tailwind.css'
// https://www.npmjs.com/package/vue-material-design-icons

import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_URL

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')