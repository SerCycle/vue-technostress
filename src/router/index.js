import { createRouter, createWebHistory } from "vue-router";

// import template
import TPhone from '../pages/TemplatePhone.vue';

// import home
import Home from '../pages/components/homepage.vue'

const routes = [
    {
        name: 'Homepage',
        path: '/',
        component:TPhone,
        children:[
            {
                name: 'Homepage',
                path: '/',
                component:Home
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
export default router;