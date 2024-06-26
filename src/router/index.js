import { createRouter, createWebHistory } from 'vue-router';
import Weather from '../components/Weather.vue';
import Tugas from '../components/Tugas.vue';

const routes = [
  {
    path: '/page1',
    name: 'PageOne',
    component: Weather,
  },
  {
    path: '/page2',
    name: 'PageTwo',
    component: Tugas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
