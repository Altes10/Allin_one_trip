import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueAxios from 'vue-axios'
import http from "./http"

createApp(App).use(router).use(VueAxios, http).mount('#app')
