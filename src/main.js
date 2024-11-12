import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Імпорт маршрутизатора
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(router);    // Підключення маршрутизатора
app.config.globalProperties.$axios = axios; // Використання axios як глобального

app.mount('#app');
