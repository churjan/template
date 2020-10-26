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
    // 默认参考\node_modules\@vue\cli-service\lib\config\base.js
    // 配置别名
    config.resolve.extensions.add('css')
    config.resolve.extensions.add('scss')
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `
					@import "@/scss/variables";
					@import "@/scss/mixins";
                `,
      },
    },
  },
}
