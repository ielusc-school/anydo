import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/home/index.vue';
import Account from '@/views/account/index.vue';
import TaskView from '@/views/task/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/nova-conta',
    name: 'ap.NewAccount',
    component: Account,
  },
  {
    path: '/minhas-tarefas',
    name: 'ap.tasks',
    component: TaskView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
