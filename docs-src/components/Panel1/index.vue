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
  }
}
</script>

<style>
#home {
  background: red;
}
</style>
