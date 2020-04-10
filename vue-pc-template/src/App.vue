<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
	mounted() {
		console.log(process.env)
	},
}
</script>
