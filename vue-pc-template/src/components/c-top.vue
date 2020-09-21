<template>
  <div class="container">
    <i :class="['collapse-icon', collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" @click="onCollapse"></i>
  </div>
</template>

<script>
export default {
  computed: {
    collapse() {
      return this.$store.state.collapse
    },
  },
  methods: {
    onCollapse() {
      this.$store.commit('collapse')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.collapse-icon {
  font-size: 26px;
  cursor: pointer;
}
</style>
