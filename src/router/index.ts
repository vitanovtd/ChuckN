import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
// import Jokes from '../views/Jokes.vue';
// import Favourites from '../views/Favourites.vue';
// import Favourites from '../views/Favourites.vue';

import Home from '../views/Home.vue';
import Jokes from '../views/Jokes.vue';
import Favourites from '../views/Favourites.vue';




const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/jokes', name: "Jokes", component: Jokes },
  { path: '/favourites', name: "Favourites", component: Favourites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
