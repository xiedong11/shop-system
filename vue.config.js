module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://conf.qb.chinaqw.com/',
                changeOrigin: true,
            },
            '/circle': {
                target: 'http://im.qb.chinaqw.com/',
                changeOrigin: true,
            },
            '/qwapi': {
                target: 'http://qb.chinaqw.com/',
                changeOrigin: true,
            }

        },


    }

}