<template lang="pug">
	#app
		router-view
</template>
<script>
export default {
	mounted() {
		console.log(process.env)
	},
}
</script>
<style>
html {
	/* user-select: none; */
}
</style>
