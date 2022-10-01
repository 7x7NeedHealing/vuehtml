const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // publicPath:'./',
//  打包
  assetsDir: 'static',
  parallel: false,
  publicPath: './',

})
