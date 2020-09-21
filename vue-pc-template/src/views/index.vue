<template>
  <div class="grid-container">
    <div class="aside">
      <c-menu />
    </div>
    <div class="top">
      <c-top />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    CMenu: () => import('@/components/menu/c-menu'),
    CTop: () => import('@/components/c-top'),
  },
  computed: {
    collapse() {
      return this.$store.state.collapse
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-container {
  height: 100vh;
  display: grid;
  grid-template-areas:
    'a b'
    'a c';
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  .aside {
    grid-area: a;
  }
  .top {
    grid-area: b;
  }
  .main {
    grid-area: c;
    padding: 15px;
  }
}
</style>
