import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import OrderPage from '../components/OrderPage.vue';
import AdminPage from '../components/AdminPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/order', component: OrderPage },
    { path: '/admin', component: AdminPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
