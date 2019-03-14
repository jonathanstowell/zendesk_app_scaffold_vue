module.exports = {
  publicPath: '',
  outputDir: 'dist/assets',
  css: {
    extract: false
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      filename: 'app.js'
    }
  },
  filenameHashing: false,
  productionSourceMap: false
}
