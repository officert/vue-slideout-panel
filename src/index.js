import VueSlideoutPanel from './components/SlideoutPanel';

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-slideout-panel', VueSlideoutPanel)
}

export {
  VueSlideoutPanel
};

export default VueSlideoutPanel
