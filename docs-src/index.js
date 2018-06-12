import Vue from 'vue';
import App from './components/App';
import Panel1 from './components/Panel1';
import router from './router';

Vue.component('panel-1', Panel1);

new Vue({
    template: '<App></App>',
    router,
    components: {
      App
    }
  })
  .$mount('#app');
