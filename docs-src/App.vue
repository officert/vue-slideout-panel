<template>
<div id="app" class="">
  <div class="flex-fill flex flex-row">
    <router-view class="flex-fill relative"></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  computed: {
    version() {
      return VERSION;
    }
  }
}
</script>

<style lang="less">
html,
body {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 100%;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  overflow: hidden;
}
</style>
