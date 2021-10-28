import VueRouter from 'vue-router';
import Home from './views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
