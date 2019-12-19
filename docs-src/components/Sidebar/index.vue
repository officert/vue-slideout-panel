<template src="./template.html">
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {}
  },
  computed: {
    activeRoute() {
      return this.$route.name;
    }
  },
  methods: {}
};
</script>
<style lang="less">
#sidebar {
    min-width: 200px;
    padding-top: 20px;
    position: sticky;
    top: 0;

    ul {
        margin: 0;
        padding: 0;

        li {
            display: block;

            &.active {
              ul {
                display: block;
              }
            }

            a {
                display: block;
                padding: 10px;
                border-radius: 4px;

                &.active {
                    background: #F3F6FA;
                }
            }

            ul {
                padding-left: 30px;
                margin-top: 15px;
                display: none;
                li {
                    a {
                        padding: 5px;
                    }
                }
            }
        }
    }
}
</style>
