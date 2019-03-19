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

class PanelResult {
  constructor(id, promise, panelOptions) {
    if (!id) throw new Error('id');
    if (!promise) throw new Error('promise');
    if (!panelOptions) throw new Error('panelOptions');

    this._id = id;
    this._promise = promise;
    this._panelOptions = panelOptions;
  }

  get promise() {
    return this._promise;
  }

  /**
   * @param {Object} [options]
   * @param {Object} [options.props] - any props you want to update
   */
  show(options = {}) {
    const panelOptions = Object.assign(this._panelOptions, options);

    return showPanel(panelOptions, this._id);
  }

  hide() {
    const panelOptions = Object.assign({
      id: this._id
    }, this._panelOptions);

    eventBus.$emit('hideSlideOutPanel', panelOptions);
  }
}

function showPanel(options, existingId) {
  if (!options) throw new Error('options is required');
  if (!options.component) throw new Error('options.component is required');

  const id = existingId || generateGuid();

  options.id = id;

  const promise = new Promise(resolve => {
    eventBus.$emit('showSlideOutPanel', options);

    eventBus.$once(`hideSlideOutPanel-${options.id}`, payload => {
      return resolve(payload.data);
    });
  });

  return new PanelResult(id, promise, options);
}

export default {
  show(options) {
    return showPanel(options);
  }
};
