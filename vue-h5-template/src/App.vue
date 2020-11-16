<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(process.env)
  },
}
</script>
<style lang="scss">
@import '@/scss';
</style>
