<template src="./template.html">
</template>

<script>
export default {
  name: 'examples-openOn',
  data() {
    return {
      openOn: 'left'
    }
  },
  methods: {
    showPanel() {
      this.$showPanel({
        component: 'panel-1',
        height: 600,
        width: 600,
        openOn: this.openOn
      });
    }
  }
};
</script>

<style lang="less">
</style>
