module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://conf.qb.chinaqw.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/circle': {
                target: 'http://im.qb.chinaqw.com/',
                changeOrigin: true,
            }
        },


    }

}