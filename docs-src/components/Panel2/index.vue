<template src="./template.html">
</template>

<script>
export default {
  name: 'panel-2',
  props: {
    age: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      name: null
    }
  },
  methods: {
    closePanel() {
      this.$emit('closePanel', this.name);
    }
  }
};
</script>

<style lang="less">
#panel-2 {
    padding: 45px;
}
</style>
