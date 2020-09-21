<template lang="pug">
	div
		template(v-for="(item, index) in menuData")
			template(v-if="item.children")
				el-submenu(:index="item.name")
					template(slot="title")
						i(:class="[item.icon]")
						span(slot="title") {{item.title}}
					c-menu-tree(:menuData="item.children")
			template(v-else)
					el-menu-item(:index="item.name")
						i(:class="[item.icon]")
						span(slot="title") {{item.title}}
</template>

<script>
export default {
  props: {
    menuData: Array,
  },
  components: {
    CMenuTree: () => import('./c-menu-tree'),
  },
}
</script>

<style lang="scss" scoped></style>
