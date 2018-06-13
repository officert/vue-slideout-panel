<template src="./template.html">
</template>

<script>
import {
  vueSlideoutPanelService
} from '../../../src/index';

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
      vueSlideoutPanelService.show({
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
      this.$emit('closePanel', {
        name: this.form.name
      });
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
