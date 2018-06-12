<template>
<div id="app" class="fixed absolute--fill flex flex-column">
  <!-- navbar -->
  <div class="flex-none flex flex-row items-center pv3 ph4 bg-blue white">
    <div class="flex-fill">
      <a :href="'https://github.com/dzwillia/vue-grid/releases/tag/v'+version" class="white no-underline underline-hover">vue-grid {{version}}</a>
    </div>
    <div class="flex-none">
      <a href="https://github.com/dzwillia/vue-grid" rel="noopener" target="_blank" title="View on Github"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 0 16 16"><path d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59.4.075.548-.173.548-.384 0-.19-.008-.82-.01-1.49-2.227.485-2.696-.943-2.696-.943-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.486.055-.486.802.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.954 0-.874.313-1.588.824-2.148-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.2.82.64-.177 1.323-.266 2.003-.27.68.004 1.365.093 2.004.27 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.08 2.117.512.56.822 1.274.822 2.147 0 3.072-1.872 3.748-3.653 3.946.288.248.544.735.544 1.48 0 1.07-.01 1.933-.01 2.196 0 .213.145.462.55.384 3.178-1.06 5.467-4.057 5.467-7.59 0-4.418-3.58-8-8-8z"></path></svg></a>
    </div>
  </div>
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

<style>
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
