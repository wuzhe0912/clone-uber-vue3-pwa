// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  publicPath: '/',
  // 調整本地端口
  devServer: {
    host: 'localhost',
    port: 8081,
    // 設置代理 => 解決跨域問題(調用後端API接口時通常不是同一個域名)
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        // websocket 縮寫 => ws
        ws: false,
        // 避免在訪問網址時，自動將原點移除
        changeOrigin: false
      }
    }
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Tiger Coding Blog'
        return args
      })
  }
}
