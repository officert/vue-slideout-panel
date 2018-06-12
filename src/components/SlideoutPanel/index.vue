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
      panels: []
    };
  },
  methods: {
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

      this.panels.splice(index, 1);

      if (!this.panels || this.panels.length === 0) {
        this.onLastPanelDestroyed();
      }
    },
    onShowSlideOutPanel(payload) {
      this.panels.push(payload);

      if (!this.panels || this.panels.length === 1) {
        this.onFirstPanelCreated();
      }
    },
    onFirstPanelCreated() {
      this.visible = true;

      setTimeout(() => {
        this.panelsVisible = true;
      }, 300);

      document.addEventListener('keydown', this.onEscapeKeypress);

      // jQuery('body').addClass('modal-open');
    },
    onLastPanelDestroyed() {
      this.panelsVisible = false;

      setTimeout(() => {
        this.visible = false;
      }, 300);

      document.removeEventListener('keydown', this.onEscapeKeypress);

      // jQuery('body').removeClass('modal-open');
    },
    onBgClicked() {
      console.log('bg clicked');
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
