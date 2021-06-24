import Vue from 'vue';
import VueSlideoutPanel from '../src/index';

import App from './components/App';
import Sidebar from './components/Sidebar';
import Panel1 from './components/Panel1';
import Panel2 from './components/Panel2';
import Panel3 from './components/Panel3';
import Panel4 from './components/Panel4';
import router from './router';

Vue.use(VueSlideoutPanel);

Vue.component('sidebar', Sidebar);
Vue.component('panel-1', Panel1);
Vue.component('panel-2', Panel2);
Vue.component('panel-3', Panel3);
Vue.component('panel-4', Panel4);

new Vue({
    template: '<App></App>',
    router,
    components: {
      App
    }
  })
  .$mount('#app');
