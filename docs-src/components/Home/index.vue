<template src="./template.html">
</template>

<script>
import slideOutPanelService from '../../../src/service';

export default {
  name: 'home',
  data() {
    return {}
  },
  methods: {
    showPanel() {
      slideOutPanelService.show({
        component: 'panel-1',
        props: {
          data: {
            firstName: 'John',
            lastName: 'Doe',
            age: 39
          }
        }
      });
    }
  }
}
</script>

<style>
#home {
  background: red;
}
</style>
