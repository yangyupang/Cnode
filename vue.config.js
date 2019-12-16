module.exports = {
  devServer: {
    proxy: {
      "/api": {
        ws: false,
        target: "https://api-m.mtime.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
