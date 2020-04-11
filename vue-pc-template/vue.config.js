const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
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
		config.resolve.alias.set('@', resolve('src'))
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
