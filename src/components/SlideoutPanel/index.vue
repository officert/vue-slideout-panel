<template src="./template.html">
</template>

<style lang="less" src="./styles.less"></style>

<script>
import eventBus from '../../eventBus';

const vm = {
  name: 'slideout-panel',
  components: {},
  data() {
    return {
      visible: false,
      panelsVisible: false,
      panelBgVisible: true,
      panels: []
    };
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
      const currentPanel = this.panels[this.panels.length - 1];

      eventBus.$emit(`hideSlideOutPanel-${currentPanel.id}`, {
        id: currentPanel.id,
        data
      });

      const index = this.panels.indexOf(currentPanel);

      this.removePanelStylesheet(currentPanel);

      this.panels.splice(index, 1);

      if (!this.panels || this.panels.length === 0) {
        this.onLastPanelDestroyed();
      }
    },
    onShowSlideOutPanel(panel) {
      panel.styles = {
        'z-index': this.panels.length + 100
      };

      if (!panel.width) panel.styles.width = '900px';
      else if (!panel.width.endsWith || !panel.width.endsWith('px')) panel.styles.width = `${panel.width}px`;
      else panel.styles.width = panel.width;

      panel.cssId = `slide-out-panel-${panel.id}`;
      panel.stylesheetId = `slide-out-panel-styles-${panel.id}`;

      this.createPanelStylesheet(panel);

      this.panels.push(panel);

      if (!this.panels || this.panels.length === 1) {
        this.onFirstPanelCreated();
      }
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
                    } catch (err) { }
      }
    },
    onFirstPanelCreated() {
      this.visible = true;

      setTimeout(() => {
        this.panelsVisible = true;
      }, 300);

      document.addEventListener('keydown', this.onEscapeKeypress);

      document.body.className += ' slideout-panel-open';

      const firstPanel = this.panels[0];

      if (firstPanel.hideBg) this.panelBgVisible = false;
    },
    onLastPanelDestroyed() {
      this.panelsVisible = false;

      setTimeout(() => {
        this.visible = false;
      }, 300);

      document.removeEventListener('keydown', this.onEscapeKeypress);

      document.body.className = document.body.className.replace('slideout-panel-open', '');
    },
    onBgClicked() {
      console.log('bg clicked');

      this.closeCurrentPanel();
    },
    onEscapeKeypress(e) {
      if (e.keyCode === 27) {
        console.log('esc clicked');

        this.closeCurrentPanel();
      }
    }
  },
  created() {
    eventBus.$on('showSlideOutPanel', this.onShowSlideOutPanel);
  },
  destroyed() {
    eventBus.$off('showSlideOutPanel', this.onShowSlideOutPanel);
  }
};

export default vm;
</script>
