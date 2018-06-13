<template src="./template.html">
</template>

<script>
export default {
  name: 'panel-3',
  props: {},
  methods: {
    closePanel() {
      this.$emit('closePanel');
    }
  }
};
</script>

<style>
#panel-1 {
  padding: 40px;
}
</style>
