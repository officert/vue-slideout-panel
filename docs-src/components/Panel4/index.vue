<template src="./template.html">
</template>

<script>
export default {
  name: 'panel-4',
  props: {},
  data() {
    return {}
  },
  methods: {
    closePanel() {
      this.$emit('closePanel');
    }
  }
};
</script>

<style lang="less">
#panel-4 {
    padding: 45px;
}
</style>
