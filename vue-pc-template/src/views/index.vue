<template>
	<div>index</div>
</template>

<script>
export default {
	mounted() {
		this.$api.mock
			.pageList({
				pageNum: 1,
				pageSize: 10,
			})
			.then(res => {
				console.log(res)
			})
	},
}
</script>

<style lang="scss" scoped></style>
