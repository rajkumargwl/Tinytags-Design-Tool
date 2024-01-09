import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import { shopifyAppBridgePlugin } from './helpers/appBridge.js'
import "./assets/css/style.css";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(shopifyAppBridgePlugin)
app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')

