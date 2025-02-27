import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import './assets/main.css'
import 'primeicons/primeicons.css'

createApp(App)
.use(router)
.use(Toast, {
    position: POSITION.BOTTOM_CENTER
})
.mount('#app')
