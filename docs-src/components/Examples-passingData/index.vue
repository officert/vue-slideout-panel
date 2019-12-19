<template src="./template.html">
</template>

<script>
export default {
  name: 'examples-passing-data',
  data() {
    return {
      name: null,
      age: null
    }
  },
  methods: {
    showPanel() {
      const panelResult = this.$showPanel({
        component: 'panel-2',
        width: 600,
        openOn: 'right',
        props: {
          age: this.age
        }
      });

      panelResult.promise
        .then(result => {
          this.name = result;
        });
    }
  }
};
</script>

<style lang="less">
</style>
