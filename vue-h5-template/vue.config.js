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
	chainWebpack: config => {
		//配置别名
		config.resolve.extensions.add('css')
		config.resolve.extensions.add('scss')
	},
	devServer: {
		proxy: {
			'/mock': {
				target: 'http://localhost:3000',
				changeOrigin: true,
			},
		},
	},
}
