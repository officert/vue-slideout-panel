import Vue from 'vue';
import {
  VueSlideoutPanel
} from '../src/index';

import App from './components/App';
import Panel1 from './components/Panel1';
import Panel2 from './components/Panel2';
import Panel3 from './components/Panel3';
import router from './router';

Vue.component('slideout-panel', VueSlideoutPanel);
Vue.component('panel-1', Panel1);
Vue.component('panel-2', Panel2);
Vue.component('panel-3', Panel3);

new Vue({
    template: '<App></App>',
    router,
    components: {
      App
    }
  })
  .$mount('#app');
