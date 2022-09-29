import Vue from 'vue';
import VueRouter from 'vue-router';
import MyHome from '../views/MyHome.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MyHome,
    },
    {
        path: '/Productos',
        name: 'Productos',
        component: () => import('../components/ProductCard.vue'),

    },
    {
        path: '/Registro',
        name: 'Registro',
        component: () => import('../components/RegisterForm.vue'),
    },
    {
        path: '/Contacto',
        name: 'Contacto',
        component: () => import('../components/ContactUs.vue'),
    },
    {
        path: '/Carrito',
        name: 'Carrito',
        component: () => import('../components/CartProducts.vue'),
    },
    // {
    //     path: '/skills',
    //     name: 'Skills',
    //     component: () => import('../components/Skills.vue')
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import('../components/About.vue')
    // }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
