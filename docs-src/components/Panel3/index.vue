<template src="./template.html">
</template>

<script>
export default {
  name: 'panel-3',
  props: {},
  data() {
    return {
      name: null
    }
  },
  methods: {
    openPanel() {
      this.$showPanel({
        component: 'panel-4',
        width: 600,
        openOn: 'left'
      });
    }
  }
};
</script>

<style lang="less">
#panel-3 {
    padding: 45px;
}
</style>
