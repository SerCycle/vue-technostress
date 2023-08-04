import { createRouter, createWebHistory } from "vue-router";

// import template
import TPhone from '../pages/TemplatePhone.vue';

// import 3 page utama
import Home from '../pages/components/homepage.vue';
import Historypeminjaman from '../pages/components/historypage.vue';
import Account from '../pages/components/accountpage.vue';

// Import FaQPage
import FaQPage from '../pages/components/faq/faqpagelayout.vue';
import FaQPinjaman from '../pages/components/faq/melakukanpinjaman/faqpinjamantemplate.vue';
import FaQPinjaman1 from '../pages/components/faq/melakukanpinjaman/faqpinjaman1.vue';
import FaQPinjaman2 from '../pages/components/faq/melakukanpinjaman/faqpinjaman2.vue';
import FaQPinjaman3 from '../pages/components/faq/melakukanpinjaman/faqpinjaman3.vue';
import FaQSimulasi from '../pages/components/faq/melakukansimulasi/faqsimulasitemplate.vue';
import FaQSimulasi1 from '../pages/components/faq/melakukansimulasi/faqsimulasi1.vue';
import FaQSimulasi2 from '../pages/components/faq/melakukansimulasi/faqsimulasi2.vue';
import FaQSimulasi3 from '../pages/components/faq/melakukansimulasi/faqsimulasi3.vue';
import FaQPembayaran from '../pages/components/faq/melakukanpembayaran/faqpembayarantemplate.vue';
import FaQPembayaran1 from '../pages/components/faq/melakukanpembayaran/faqpembayaran1.vue';
import FaQPembayaran2 from '../pages/components/faq/melakukanpembayaran/faqpembayaran2.vue';
import FaQPembayaran3 from '../pages/components/faq/melakukanpembayaran/faqpembayaran3.vue';
import FaQPembayaran4 from '../pages/components/faq/melakukanpembayaran/faqpembayaran4.vue';
import FaQPembayaran5 from '../pages/components/faq/melakukanpembayaran/faqpembayaran5.vue';
import FaQPembayaran6 from '../pages/components/faq/melakukanpembayaran/faqpembayaran6.vue';
import FaQPembayaran7 from '../pages/components/faq/melakukanpembayaran/faqpembayaran7.vue';
import FaQPembayaran8 from '../pages/components/faq/melakukanpembayaran/faqpembayaran8.vue';

// Import Simulation
import SimulationPage from '../pages/components/simulation/simulpage.vue';
import SimulationBefore from '../pages/components/simulation/simulbefore.vue';
import SimulationAfter from '../pages/components/simulation/simulafter.vue';

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
        path: '/faq',
        component: FaQPage,
    },
    {
        name: 'FaQPinjaman',
        path: '/faq/pinjaman',
        component: FaQPinjaman,
        children: [
            {
                name: 'FaQPinjaman1',
                path: '/faq/pinjaman/1',
                component: FaQPinjaman1
            },
            {
                name: 'FaQPinjaman2',
                path: '/faq/pinjaman/2',
                component: FaQPinjaman2
            },
            {
                name: 'FaQPinjaman3',
                path: '/faq/pinjaman/3',
                component: FaQPinjaman3
            },
        ],
    },
    {
        name: 'FaQSimulasi',
        path: '/faq/simulasi',
        component: FaQSimulasi,
        children: [
            {
                name: 'FaQSimulasi1',
                path: '/faq/simulasi/1',
                component: FaQSimulasi1
            },
            {
                name: 'FaQSimulasi2',
                path: '/faq/simulasi/2',
                component: FaQSimulasi2
            },
            {
                name: 'FaQSimulasi3',
                path: '/faq/simulasi/3',
                component: FaQSimulasi3
            },
        ],
    },
    {
        name: 'FaQPembayaran',
        path: '/faq/pembayaran',
        component: FaQPembayaran,
        children: [
            {
                name: 'FaQSPembayaran1',
                path: '/faq/pembayaran/1',
                component: FaQPembayaran1
            },
            {
                name: 'FaQSPembayaran2',
                path: '/faq/pembayaran/2',
                component: FaQPembayaran2
            },
            {
                name: 'FaQSPembayaran3',
                path: '/faq/pembayaran/3',
                component: FaQPembayaran3
            },
            {
                name: 'FaQSPembayaran4',
                path: '/faq/pembayaran/4',
                component: FaQPembayaran4
            },
            {
                name: 'FaQSPembayaran5',
                path: '/faq/pembayaran/5',
                component: FaQPembayaran5
            },
            {
                name: 'FaQSPembayaran6',
                path: '/faq/pembayaran/6',
                component: FaQPembayaran6
            },
            {
                name: 'FaQSPembayaran7',
                path: '/faq/pembayaran/7',
                component: FaQPembayaran7
            },
            {
                name: 'FaQSPembayaran8',
                path: '/faq/pembayaran/8',
                component: FaQPembayaran8
            },
        ],
    },
    {
        name: 'SimulationPage',
        path: '/simulation',
        component: SimulationPage,
        children: [
            {
                name: 'SimulationPageBefore',
                path: '/simulation/input',
                component: SimulationBefore
            },
            {
                name: 'SimulationPageAfter',
                path: '/simulation/output',
                component: SimulationAfter
            }
        ],
    }
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