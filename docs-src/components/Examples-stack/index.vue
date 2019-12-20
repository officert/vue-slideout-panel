<template src="./template.html">
</template>

<script>
export default {
  name: 'examples-stack',
  data() {
    return {}
  },
  methods: {
    showPanel() {
      this.$showPanel({
        component: 'panel-3',
        width: 600,
        openOn: 'left'
      });
    }
  }
};
</script>

<style lang="less">
</style>
