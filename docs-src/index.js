import Vue from 'vue';
import App from './App.vue';
import router from './router';

const app = new Vue({
  el: '#app',
  // provide the router using the 'router' option.
  // this will inject the router to make the whole app router-aware.
  router,
  render: h => h(App)
});
