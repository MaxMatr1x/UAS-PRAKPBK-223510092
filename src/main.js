import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router/index';
import './style.css';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

// Buat aplikasi Vue
const myApp = createApp(App);

// Gunakan Quasar dan router
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
}).use(router);

// Mount aplikasi ke elemen dengan id 'app'
myApp.mount('#app');
