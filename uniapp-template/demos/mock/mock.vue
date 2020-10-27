<template>
	<view>
		mock
	</view>
</template>

<script>
	export default {
		mounted(){
			this.$apis.mock.postWay().then(res=>{
				console.log(res,888)
			})
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
