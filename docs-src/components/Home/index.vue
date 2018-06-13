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
          // openOn: 'left',
          // width: 500,
          component: 'panel-1',
          props: {
            data: {
              firstName: 'John',
              lastName: 'Doe',
              age: 39
            }
          }
        })
        .then(results => {
          console.log('Results for panel 1:', results);
        });
    }
  }
}
</script>

<style lang="less">
#home {}
</style>
