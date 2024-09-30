import "bootstrap";
import 'bootstrap/scss/bootstrap.scss'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './stores';
 //single entry point for glboalstore through index.ts


const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');

