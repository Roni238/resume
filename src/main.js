import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewImage from '@/components/ViewImage.vue'
import '@/css/_variables.css'; 

const app = createApp(App).use(store).use(router)
app.mount('#app')

app.component(ViewImage.name,ViewImage)



