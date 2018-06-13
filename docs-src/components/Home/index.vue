<template src="./template.html">
</template>

<script>
import {
  vueSlideoutPanelService
} from '../../../src/index';

export default {
  name: 'home',
  data() {
    return {}
  },
  methods: {
    showPanel() {
      vueSlideoutPanelService.show({
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
#home {
    .page-header {
        color: #fff;
        text-align: center;
        background-color: #159957;
        background-image: linear-gradient(120deg, #9069FD, #0C94FD);

        .logo {
            text-align: center;

            img {
                height: 80px;
            }
        }
    }

    .main-content {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: #0C94FD;
        }
    }
}
</style>
