<template>
  <div class="grid-container">
    <div class="sidebar">
      <sidebar />
    </div>
    <div class="navbar">
      <navbar />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Sidebar: () => import('./components/sidebar/menu'),
    Navbar: () => import('./components/navbar'),
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
  .sidebar {
    grid-area: a;
  }
  .navbar {
    grid-area: b;
  }
  .main {
    grid-area: c;
    padding: 15px;
  }
}
</style>
