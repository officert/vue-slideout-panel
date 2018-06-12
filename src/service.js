import eventBus from './eventBus';

function generateGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

/**
 * @param {Object} options
 * @param {String} [options.message]
 */
function show(options) {
  if (!options) throw new Error('options is required');
  if (!options.component) throw new Error('options.component is required');

  options.id = generateGuid();

  return new Promise(resolve => {
    eventBus.$emit('showSlideOutPanel', options);

    // const eventHandler = (payload) => {
    //   console.log('OFFF', payload, payload.id, options.id);
    //
    //   if (payload.id === options.id) {
    //     console.log('remove event handler');
    //
    //     eventBus.$off('showSlideOutPanel', eventHandler);
    //
    //     return resolve(payload.data);
    //   }
    //
    //   return null;
    // };

    eventBus.$once(`hideSlideOutPanel-${options.id}`, payload => {
      console.log('HEREEEEE');
      return resolve(payload.data);
    });
  });
}

export default {
  show
};
