import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: () => import('./views/Dashboard')
        },
        {
            path: '/users',
            name: 'Dashboard',
            component: () => import('./views/Users')
        },
    ]
});

export default router;