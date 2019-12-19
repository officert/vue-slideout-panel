import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Install from './components/Install';
import Options from './components/Options';
import Examples from './components/Examples';

Vue.use(VueRouter);

const routes = [{
  path: '*',
  redirect: '/home'
}, {
  path: '/',
  redirect: '/home'
}, {
  name: 'Home',
  path: '/home',
  component: Home
}, {
  name: 'Install',
  path: '/install',
  component: Install
}, {
  name: 'Options',
  path: '/options',
  component: Options
}, {
  name: 'Examples',
  path: '/examples',
  component: Examples
}];

export default new VueRouter({
  base: '/vue-friendly-iframe/',
  routes
});
