require('./bootstrap');

import {createApp} from 'vue'
import home from './Components/home.vue';
const app= createApp({});
app.component('home',home);
app.mount('#app');
