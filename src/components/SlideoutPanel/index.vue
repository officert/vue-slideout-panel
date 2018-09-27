<template src="./template.html">
</template>

<style lang="less" src="./styles.less"></style>

<script>
import Vue from 'vue';

import eventBus from '../../eventBus';

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
    }
  },
  methods: {
    getPanelClasses(panel) {
      const panelClasses = {};

      if (panel.openOn === 'left') {
        panelClasses['open-on-left'] = true;
      } else {
        panelClasses['open-on-right'] = true;
      }

      if (panel.cssClass) panelClasses[panel.cssClass] = true;

      return panelClasses;
    },
    onCloseComponent(data) {
      this.closeCurrentPanel(data);
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

      if (!panel.width) panel.styles.width = '900px';
      else if (!panel.width.endsWith || !panel.width.endsWith('px')) panel.styles.width = `${panel.width}px`;
      else panel.styles.width = panel.width;

      panel.visible = true;
      panel.cssId = `slide-out-panel-${panel.id}`;
      panel.stylesheetId = `slide-out-panel-styles-${panel.id}`;
      panel.inlineComponent = !isString(panel.component);
      panel.componentName = isString(panel.component) ? panel.component : panel.component.name; //tuck away the actual component name

      if (window.vue2PanelDebug) {
        console.log('panel.props', panel.props);
        console.log('panel.component', panel.component);
        console.log('panel.componentName', panel.componentName);
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
      if (document.body.className.indexOf('slideout-panel-open') < 0) {
        if (document.body.className === '') {
          document.body.className += 'slideout-panel-open';
        } else {
          document.body.className += ' slideout-panel-open';
        }
      }
    },
    removeBodyClass() {
      document.body.className = document.body.className.replace('slideout-panel-open', '');
    },
    onBgClicked() {
      const currentPanel = this.panels[this.panels.length - 1];

      if (currentPanel.disableBgClick) return;

      this.closeCurrentPanel();
    },
    onEscapeKeypress(e) {
      if (e.keyCode === 27) {
        this.closeCurrentPanel();
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
