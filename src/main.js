import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router/index';
import './style.css';


import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';


const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, 
}).use(router);

myApp.mount('#app');
