<template>
	<div></div>
</template>

<script>
export default {
	mounted() {
		this.$apis.mock.test().then(res => {
			console.log(res)
		})
	},
}
</script>

<style lang="scss" scoped></style>
