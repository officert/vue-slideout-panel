<template src="./template.html">
</template>

<script>
export default {
  name: 'panel-2',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    closePanel() {
      this.$emit('close');
    },
    closePanel() {
      this.$emit('closePanel');
    }
  }
}
</script>

<style>
#panel-1 {
  padding: 40px;
}

#panel-1 .data {}
</style>
