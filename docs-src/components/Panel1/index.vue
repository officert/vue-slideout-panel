<template src="./template.html">
</template>

<script>
import slideOutPanelService from '../../../src/service';

export default {
  name: 'panel-1',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        name: ''
      }
    };
  },
  methods: {
    showPanel2() {
      slideOutPanelService.show({
        // openOn: 'left',
        component: 'panel-2',
        props: {
          data: {
            name: this.form.name
          }
        }
      });
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
