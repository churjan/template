<template>
  <div>
    <div v-for="(item, index) in menuData" :key="index">
      <div v-if="item.children">
        <el-submenu :index="item.name">
          <template slot="title">
            <i :class="[item.icon]"></i><span slot="title">{{ item.title }}</span>
          </template>
          <menu-tree :menuData="item.children"></menu-tree>
        </el-submenu>
      </div>
      <div v-else>
        <el-menu-item :index="item.name">
          <i :class="[item.icon]"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuData: Array,
  },
  components: {
    MenuTree: () => import('./menu-tree'),
  },
}
</script>

<style lang="scss" scoped></style>
