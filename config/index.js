const path = require('path');

console.log(__dirname)

module.exports = {
  kmPath: path.resolve(__dirname, '../../km'),
  build: {
    env: require('./prod.env.js'),
    index: path.resolve(__dirname, '../index.html'),
    distRoot: path.resolve(__dirname, '../dist'),
    dataSubDirectory: 'data',
    dataIndexName: 'index.json',
    assetsSubDirectory: 'asset',
    assetsPublicPath: '/dist/asset',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    secure: false,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/api": {
        target: 'http://sample.com',
        changeOrigin: true,
      }
    },
    cssSourceMap: false
  }
}
