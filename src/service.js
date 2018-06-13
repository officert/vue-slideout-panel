import Promise from 'promise-polyfill';

import eventBus from './eventBus';

function generateGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function show(options) {
  if (!options) throw new Error('options is required');
  if (!options.component) throw new Error('options.component is required');

  options.id = generateGuid();

  return new Promise(resolve => {
    eventBus.$emit('showSlideOutPanel', options);

    eventBus.$once(`hideSlideOutPanel-${options.id}`, payload => {
      return resolve(payload.data);
    });
  });
}

export default {
  show
};
