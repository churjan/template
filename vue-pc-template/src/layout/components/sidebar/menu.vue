<template>
  <div class="container">
    <el-menu
      :collapse="collapse"
      background-color="#181e2a"
      text-color="#ffffff73"
      active-text-color="#fff"
      :default-active="activeName"
      @select="onSelect"
    >
      <menu-tree :menuData="treeData"></menu-tree>
    </el-menu>
  </div>
</template>

<script>
import treeData from '@/configs/menu.config.js'
export default {
  components: {
    MenuTree: () => import('./menu-tree'),
  },
  data() {
    return {
      treeData,
    }
  },
  computed: {
    collapse() {
      return this.$store.state.collapse
    },
    activeName() {
      const path = this.$route.matched[this.$route.matched.length - 1].path
      const arr = path.split('/')
      const name = arr[arr.length - 1]
      return name
    },
  },
  mounted() {},
  methods: {
    onSelect(name, fullPath) {
      if (name === this.activeName) {
        return
      }
      const path = `/${fullPath.join('/')}`
      this.$router.push({
        path,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: rgb(24, 30, 42);
  overflow-y: auto;
  user-select: none;
}
::v-deep .el-menu {
  &:not(.el-menu--collapse) {
    width: 200px;
  }
  border-right: none;
  &.el-menu--collapse {
    span {
      display: none;
    }
  }
  .el-menu-item.is-active {
    background-color: #1890ff !important;
  }
  .el-menu-item:hover {
    color: #fff !important;
  }
  .el-submenu__title,
  .el-menu-item {
    height: 45px;
    line-height: 45px;
  }
}
</style>
