import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
import './styles/App.css'

const app = createApp(App).use(router)

app.component('DatePicker', DatePicker);

app.mount('#app')