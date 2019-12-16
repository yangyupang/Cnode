module.exports = {
    devServer: {
        proxy: {
            "/api": {
                ws: false,
                target: "https://cnodejs.org/api/v1/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}