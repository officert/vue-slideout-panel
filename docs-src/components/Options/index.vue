<template src="./template.html">
</template>

<script>
export default {
  name: 'options',
  data() {
    return {
      params: [{
        name: 'width',
        type: 'String/Number',
        desc: 'custom width, can be a number like <code>10</code> or a string like <code>\'10px\'</code> - <strong>only applies when using <code>openOn : left/right</code></strong>',
        default: '900px'
      }, {
        name: 'height',
        type: 'String/Number',
        desc: 'custom height, can be a number like <code>10</code> or a string like <code>\'10px\'</code> - <strong>only applies when using <code>openOn : top/bottom</code></strong>',
        default: '900px'
      }, {
        name: 'openOn',
        type: 'String',
        desc: '<code>left</code>, <code>right</code>, <code>top</code>, or <code>bottom</code>',
        default: 'left'
      }, {
        name: 'cssClass',
        type: 'String',
        desc: 'custom CSS class to apply to the panel body',
        default: null
      }, {
        name: 'hideBg',
        type: 'Boolean',
        desc: 'hide the backdrop - only works on the first panel, all subsequent panels will follow suit',
        default: false
      }, {
        name: 'removeBg',
        type: 'Boolean',
        desc: 'remove the backdrop - only works on the first panel, all subsequent panels will follow suit',
        default: false
      }, {
        name: 'disableBgClick',
        type: 'Boolean',
        desc: 'disable closing the panel by clicking on the backdrop',
        default: false
      }, {
        name: 'keepAlive',
        type: 'Boolean',
        desc: 'enable <a href="https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components" target="_blank">Vue\'s keep-alive</a> functionality',
        default: false
      }, {
        name: 'props',
        type: 'Object',
        desc: 'object containing any data that you want passed to your Vue.js component as props',
        default: null
      }]
    }
  },
  methods: {}
};
</script>
<style lang="less">
</style>
