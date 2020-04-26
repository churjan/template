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
	css: {
		loaderOptions: {
			// 给 sass-loader 传递选项
			sass: {
				prependData: `
					@import "@/scss/index.scss";
                `,
			},
		},
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
