import Vue from 'vue';
import VueRouter from 'vue-router';
import Basic from './Basic.vue';

Vue.use(VueRouter);

const routes = [{
    path: '*',
    redirect: '/basic'
  }, // catch all route to redirect 404s
  {
    path: '/',
    redirect: '/basic'
  },
  {
    path: '/basic',
    component: Basic
  }
];

export default new VueRouter({
  base: '/vue-slideout-panel/',
  routes
});
