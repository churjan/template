<template>
	<view>
		<view @click="onGet">用户</view>
	</view>
</template>

<script>
	export default {
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {
			onGet() {
				wx.cloud.callFunction({
				  name: 'getOpenid',
				})
				.then(res => {
				  console.log(res)
				})
				.catch(console.error)
			}
		}
	}
</script>

<style>

</style>
