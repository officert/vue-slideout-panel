import Vue from 'vue';
import {
  VueSlideoutPanel
} from '../src/index';

import App from './components/App';
import Panel1 from './components/Panel1';
import Panel2 from './components/Panel2';
import router from './router';

Vue.component('slideout-panel', VueSlideoutPanel);
Vue.component('panel-1', Panel1);
Vue.component('panel-2', Panel2);

new Vue({
    template: '<App></App>',
    router,
    components: {
      App
    }
  })
  .$mount('#app');
