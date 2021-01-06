<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log(process.env)
			console.log('platform:',this.$store.state.platform)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import '@/scss/index.scss';
</style>