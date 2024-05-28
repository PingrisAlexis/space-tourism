import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3TouchEvents from 'vue3-touch-events'


createApp(App).use(router).use(vue3TouchEvents).mount('#app')