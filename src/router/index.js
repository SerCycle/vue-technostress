import { createRouter, createWebHistory } from "vue-router";

// import template
import TPhone from '../pages/TemplatePhone.vue';

// import 3 page utama
import Home from '../pages/components/homepage.vue';
import Historypeminjaman from '../pages/components/historypage.vue';
import Account from '../pages/components/accountpage.vue';

// Import FaQPage
import FaQPage from '../pages/components/faq/faqpagelayout.vue';

const routes = [
    {
        name: 'Homepage',
        path: '/',
        component:TPhone,
        children:[
            {
                name: 'Homepage',
                path: '/homepage',
                component:Home
            },
            {
                name: 'History',
                path: '/historypeminjaman',
                component:Historypeminjaman
            },
            {
                name: 'Account',
                path: '/account',
                component:Account
            },
        ],
    },
    {
        name: 'FaQPage',
        path: '/faqpage',
        component: FaQPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

router.beforeEach(async (to) => {
    if (
        to.path == '/'
    ) {
        return { path: '/homepage' }
    }
})

export default router;