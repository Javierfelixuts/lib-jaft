import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FormLib from 'form-lib-jaft'
const app = createApp(App)
app.use(FormLib)
app.mount('#app')
