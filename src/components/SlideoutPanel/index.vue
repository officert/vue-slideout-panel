<template src="./template.html">
</template>

<style lang="less" src="./styles.less"></style>

<script>
import Vue from 'vue';

import eventBus from '../../eventBus';
import domUtils from '../../domUtils';

function isString(val) {
  return typeof val === 'string';
}

const vm = {
  name: 'slideout-panel',
  components: {},
  data() {
    return {
      panels: []
    };
  },
  computed: {
    panelsVisible() {
      return this.panels.filter(panel => panel.visible).length;
    },
    panelBgVisible() {
      return this.panels.filter(panel => panel.hideBg).length === 0;
    }
  },
  methods: {
    getPanelClasses(panel) {
      const panelClasses = {};

      if (panel.openOn === 'left') {
        panelClasses['open-on-left'] = true;
      } else if (panel.openOn === 'bottom') {
        panelClasses['open-on-bottom'] = true;
      } else if (panel.openOn === 'top') {
        panelClasses['open-on-top'] = true;
      } else {
        panelClasses['open-on-right'] = true;
      }

      if (panel.cssClass) panelClasses[panel.cssClass] = true;

      return panelClasses;
    },
    closeCurrentPanel(data) {
      if (!this.panels || !this.panels.length) return;

      const currentPanel = this.panels[this.panels.length - 1];

      this.closePanel(currentPanel, data);
    },
    closePanel(panel, data) {
      if (!panel) throw new Error('panel');

      eventBus.$emit(`hideSlideOutPanel-${panel.id}`, {
        id: panel.id,
        data
      });

      panel.visible = false;

      if (!this.panelsVisible) {
        this.removeBodyClass();
      }

      setTimeout(() => {
        if (!panel.keepAlive) {
          const index = this.panels.indexOf(panel);

          this.removePanelStylesheet(panel);

          this.panels.splice(index, 1);
        }
      }, 300); //NOTE: need to delay removing here to allow CSS animation on .slideout to finish
    },
    onShowSlideOutPanel(panel) {
      const existingPanel = this.panels.filter(p => p.id === panel.id)[0];

      if (existingPanel) {
        existingPanel.props = panel.props;
        panel = existingPanel;
      }

      panel.styles = {
        'z-index': this.panels.length + 100
      };

      if (panel.openOn === 'top' || panel.openOn === 'bottom') {
        panel.styles.width === '100%';

        if (!panel.height) panel.styles.height = '900px';
        else if (!panel.height.endsWith || !panel.height.endsWith('px')) panel.styles.height = `${panel.height}px`;
        else panel.styles.height = panel.height;
      } else {
        panel.styles.height === '100%';

        if (!panel.width) panel.styles.width = '900px';
        else if (!panel.width.endsWith || !panel.width.endsWith('px')) panel.styles.width = `${panel.width}px`;
        else panel.styles.width = panel.width;
      }

      panel.visible = true;
      panel.cssId = `slide-out-panel-${panel.id}`;
      panel.stylesheetId = `slide-out-panel-styles-${panel.id}`;
      panel.inlineComponent = !isString(panel.component);
      panel.componentName = isString(panel.component) ? panel.component : panel.component.name; //tuck away the actual component name

      if (window.vue2PanelDebug) {
        console.log('panel', panel);
      }

      if (!existingPanel) {
        this.createPanelStylesheet(panel);

        this.panels.push(panel);
      }

      this.addBodyClass();
    },
    onHideSlideOutPanel(panel) {
      this.closeCurrentPanel(panel);
    },
    createPanelStylesheet(panel) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      style.type = 'text/css';

      const css = `@media screen and (max-width:${panel.styles.width}) {
        #${panel.cssId} {
          width: 100% !important;
        }
      }`;

      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      style.id = panel.stylesheetId;

      head.appendChild(style);
    },
    removePanelStylesheet(panel) {
      const stylesheetElements = document.querySelectorAll('link[rel=stylesheet]');

      const stylesheet = document.getElementById(panel.stylesheetId);

      for (var index = 0; index < stylesheetElements.length; index++) {
        var sheet = stylesheetElements[index];

        try {
          sheet.parentNode.removeChild(stylesheet);
        } catch (err) {}
      }
    },
    addBodyClass() {
      domUtils.addClass(document.body, 'slideout-panel-open');
    },
    removeBodyClass() {
      domUtils.removeClass(document.body, 'slideout-panel-open');
    },
    onBgClicked() {
      const currentPanel = this.panels[this.panels.length - 1];

      if (!currentPanel || currentPanel.disableBgClick) {
        return;
      }

      this.closeCurrentPanel({
        closedBy: 'bg'
      });
    },
    onEscapeKeypress(e) {
      if (e.keyCode === 27) {
        const currentPanel = this.panels[this.panels.length - 1];

        if (currentPanel.disableEscClick) {
          return;
        }

        this.closeCurrentPanel({
          closedBy: 'esc'
        });
      }
    }
  },
  created() {
    document.addEventListener('keydown', this.onEscapeKeypress);

    eventBus.$on('showSlideOutPanel', this.onShowSlideOutPanel);
    eventBus.$on('hideSlideOutPanel', this.onHideSlideOutPanel);
  },
  destroyed() {
    document.removeEventListener('keydown', this.onEscapeKeypress);

    eventBus.$off('showSlideOutPanel', this.onShowSlideOutPanel);
    eventBus.$off('hideSlideOutPanel', this.onHideSlideOutPanel);
  }
};

export default vm;
</script>
