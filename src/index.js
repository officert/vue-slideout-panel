import Vue from 'vue';

import VueSlideoutPanel from './components/SlideoutPanel';
import vueSlideoutPanelService from './service';

// expose component and service to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-slideout-panel', VueSlideoutPanel);

  window.vueSlideoutPanelService = vueSlideoutPanelService;
}

export {
  VueSlideoutPanel,
  vueSlideoutPanelService
};
