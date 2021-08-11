<template>
  <div id="app">
    <router-view />
    <div class="beian"><a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2020018023号-1</a></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.beian {
  position:absolute;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
  color: #555;
  z-index: 10000;
  text-decoration: underline;
}
</style>
