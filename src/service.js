import Promise from 'promise-polyfill';

import eventBus from './eventBus';
import utils from './utils/utils';

let PANEL_DEFAULTS = {};

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
   * @param {Object} [panel]
   * @param {Object} [panel.props] - any props you want to update
   */
  show(panel = {}) {
    const panelOptions = Object.assign(this._panelOptions, panel);

    return showPanel(panelOptions, this._id);
  }

  hide() {
    const panelOptions = Object.assign({
      id: this._id
    }, this._panelOptions);

    eventBus.$emit('hideSlideOutPanel', panelOptions);
  }
}

function showPanel(panelOptions, existingId) {
  if (!panelOptions) throw new Error('panelOptions is required');
  if (!panelOptions.component) throw new Error('panelOptions.component is required');

  const id = existingId || utils.generateGuid();

  panelOptions = Object.assign(PANEL_DEFAULTS, panelOptions);

  panelOptions.id = id;
  panelOptions.openOn = panelOptions.openOn || 'left';

  const promise = new Promise(resolve => {
    eventBus.$emit('showSlideOutPanel', panelOptions);

    eventBus.$once(`hideSlideOutPanel-${panelOptions.id}`, payload => {
      return resolve(payload.data);
    });
  });

  return new PanelResult(id, promise, panelOptions);
}

function showPanelStack(panelOptions) {
  if (!panelOptions || !panelOptions.length) throw new Error('panelOptions must be an array');

  const panelResults = panelOptions.map((panelOption) => {
    return showPanel(panelOption, this._id);
  });

  return panelResults;
}

function hideAllPanels() {
  eventBus.$emit('hideAllSlideOutPanels');
}

function setPanelDefaults(defaults) {
  if (!defaults) return;

  PANEL_DEFAULTS = defaults;
}

export default {
  showPanel,
  showPanelStack,
  hideAllPanels,
  setPanelDefaults
};
