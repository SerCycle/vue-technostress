// import css
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

// import router
import router from "./router";

// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const app = createApp(App)
    app.use(router)
    app.mount('#app')
    app.component('font-awesome-icon', FontAwesomeIcon)
