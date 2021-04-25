module.exports = {
    publicPath: process.env.BASE_URL,
    outputDir: process.env.VUE_APP_OUT_PUT_DIR,
    chainWebpack: (config) => {
        //配置别名
        config.resolve.extensions.add('css')
        config.resolve.extensions.add('scss')
    },
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                prependData: ` @import "@/scss/variables";`,
            },
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.api.com',
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/',
                },
            },
        },
    },
}
