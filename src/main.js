import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueAnimateOnScroll from 'vue-animate-onscroll'


import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueAnimateOnScroll)

app.mount('#app')
