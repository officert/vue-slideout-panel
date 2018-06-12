<template src="./template.html">
</template>

<style src="./styles.less"></style>

<script>
// import jQuery from 'jquery';
// import {
//   mapState
// } from 'vuex';
// import * as mutationTypes from 'store/mutationTypes';

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
  // computed: {
  //   ...mapState({
  //     panels: state => state.slideOutPanel.panels
  //   })
  // },
  methods: {
    closePanel(data) {
      const currentPanel = this.panels[this.panels.length - 1];

      this.$store.dispatch('hideSlideOutPanel', {
        id: currentPanel.id,
        data
      });
    },
    closeAllPanels() {
      const currentPanel = this.panels[this.panels.length - 1];

      this.$store.dispatch('hideSlideOutPanel', {
        id: currentPanel.id
      });
    },
    onClosed() {
      this.closeAllPanels();
    },
    // onMutation(mutation) {
    //   if (mutation.type === mutationTypes.SHOW_SLIDE_OUT_PANEL && (!this.panels || this.panels.length === 1)) {
    //     this.onFirstPanelCreated();
    //   } else if (mutation.type === mutationTypes.HIDE_SLIDE_OUT_PANEL && (!this.panels || this.panels.length === 0)) {
    //     this.onLastPanelDestroyed();
    //   }
    // },
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
    onEscapeKeypress(e) {
      if (e.keyCode === 27) {
        this.closeAllPanels();
      }
    }
  }
  // created() {
  //   this.storeUnsubscribe = this.$store.subscribe(this.onMutation);
  // },
  // destroyed() {
  //   this.storeUnsubscribe();
  // }
};

export default vm;
</script>
