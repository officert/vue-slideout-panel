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
