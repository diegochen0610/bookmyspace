import { createRouter, createWebHistory } from 'vue-router';

// 引入頁面組件
import HomePage from '../components/homePage/HomePage.vue';
import UserRegister from '../components/userRegister/UserRegister.vue';
import SpaceBooking from '../components/spaceBooking/SpaceBooking.vue';
import EditBooking from '../components/editBooking/EditBooking.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/register',
        name: 'UserRegister',
        component: UserRegister
    },
    {
        path: '/booking',
        name: 'SpaceBooking',
        component: SpaceBooking
    },
    {
        path: '/edit-booking/:id',
        name: 'EditBooking',
        component: EditBooking,
        props: true  // 允許通過路由參數傳遞 props
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
