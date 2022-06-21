const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://comp.eeyes.xyz/',
        changeOrigin: true
      }
    }
  }
});
