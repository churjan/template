<template>
	<view>
		<cell @startmessage='startmessage' @completemessage="completemessage" :styleType="1" :paddingStyle="20" plugid='275866f1974f4392d93f6eef269f8c40'  />
		<cell @startmessage='startmessage' @completemessage="completemessage" :styleType="1" :paddingStyle="20" plugid='74537c02e713337d990f198d7cb6a365'  />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			startmessage(e){
				console.log(e)
			},
			completemessage(e){
				console.log(e)
			}
		}
	}
</script>

<style>

</style>
