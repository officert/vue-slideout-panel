<template src="./template.html">
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      example1Form: {
        name: ''
      },
      example1Result: null,
      panel1Handle: null
    }
  },
  methods: {
    showPanel1() {
      if (this.panel1Handle) {
        const newPanelResult = this.panel1Handle.show({
          props: {
            name: this.example1Form.name
          }
        });

        newPanelResult.promise
          .then(results => {
            this.example1Result = results;
          });

        return;
      }

      this.panel1Handle = this.$showPanel({
        hideBg: true,
        width: '700px',
        cssClass: 'panel-1-custom-class',
        component: 'panel-1',
        keepAlive: true,
        props: {
          name: this.example1Form.name
        }
      });

      this.panel1Handle.promise
        .then(results => {
          this.example1Result = results;
        });
    },
    showPanel3() {
      const handle = this.$showPanel({
        width: 700,
        component: 'panel-3'
      });

      handle.promise
        .then(results => {
          this.example1Result = results;
        });
    }
  }
};
</script>

<style lang="less">
#home {
    .page-header {
        color: #fff;
        text-align: center;
        background-color: #159957;
        background-image: linear-gradient(120deg, #9069FD, #0C94FD);
        padding-bottom: 4rem;

        .logo {
            text-align: center;
            height: 100px;
            width: 100px;
            margin: 0 auto;
            border-radius: 100%;
            background: white;
            margin-bottom: 40px;

            img {
                height: 60px;
                position: relative;
                top: 26px;
            }
        }

        .demo-btn {
            margin-top: 40px;
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

        .example-1 {
            .left-col {
                float: left;
                width: 50%;
                padding-right: 10px;
            }

            .right-col {
                float: right;
                width: 50%;
                padding-left: 10px;
            }

            .result {
                margin-top: 15px;
            }
        }
    }
}

.panel-1-custom-class {
    border: 1px solid red !important;
}
</style>
