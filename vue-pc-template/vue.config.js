module.exports = {
	publicPath: process.env.BASE_URL,
	outputDir: process.env.VUE_APP_OUT_PUT_DIR,
	configureWebpack: {
		resolve: {
			alias: {
				vue$: 'vue/dist/vue.esm.js',
			},
		},
	},
}
