<template src="./template.html">
</template>

<script>
export default {
  name: 'panel-2',
  props: {
    age: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    }
  },
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
