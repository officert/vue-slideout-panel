import Vue from 'vue';
import VueFriendlyIframe from '../src/index';

import App from './components/App';
import Sidebar from './components/Sidebar';
import Panel1 from './components/Panel1';
import Panel2 from './components/Panel2';
import router from './router';

Vue.use(VueFriendlyIframe);

Vue.component('sidebar', Sidebar);
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
