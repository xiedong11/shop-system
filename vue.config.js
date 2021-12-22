module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://conf.qb.chinaqw.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },


    }

}