<template src="./template.html">
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

<style>
body,
html {
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
