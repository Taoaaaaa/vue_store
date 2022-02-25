/*
 * @Description: 配置文件(跨域)
 * @Author: Tao
 * @Date: 2022-02-07 16:23:00
 * @LastEditors: Tao
 * @LastEditTime: 2022-02-15 01:41:38
 */
module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/api': {
         target: 'http://localhost:8080/', // 本地后端地址
        //target: 'http://47.115.85.237:3000/', // 线上后端地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}