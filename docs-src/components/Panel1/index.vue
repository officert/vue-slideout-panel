<template src="./template.html">
</template>

<script>
export default {
  name: 'panel-1',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      example1Form: {
        age: null,
        keepAlive: false
      }
    };
  },
  methods: {
    showPanel2() {
      this.$showPanel({
        // openOn: 'left',
        component: 'panel-2',
        props: {
          age: this.example1Form.age,
          name: this.name
        }
      });
    },
    closePanel() {
      this.$emit('closePanel', {
        age: this.example1Form.age,
        name: this.name
      });
    }
  }
};
</script>

<style>
#panel-1 {
  padding: 40px;
}

#panel-1 .data {}
</style>
