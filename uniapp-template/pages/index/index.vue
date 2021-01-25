<template>
	<view>
		<view @click="onJump('/demos/mock/mock')">MOCK</view>
		<view @click="onJump('/demos/user/user')">user</view>
	</view>
</template>

<script>
	export default {
		mounted(){
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			onJump(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>

</style>
