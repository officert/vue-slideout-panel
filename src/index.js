import Vue from 'vue';

import VueSlideoutPanel from './components/SlideoutPanel';
import vueSlideoutPanelService from './service';

// expose component and service to global scope
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({
    install(Vue) {
      Vue.component('slideout-panel', VueSlideoutPanel);
      Vue.prototype.$showPanel = vueSlideoutPanelService.show;
    }
  });

  window.vueSlideoutPanelService = vueSlideoutPanelService;
} else {
  Vue.use({
    install(NewVue) {
      NewVue.component('slideout-panel', VueSlideoutPanel);
      NewVue.prototype.$showPanel = vueSlideoutPanelService.show;
    }
  });
}

export {
  VueSlideoutPanel,
  vueSlideoutPanelService
};
