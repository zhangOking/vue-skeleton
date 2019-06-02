const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const marge = require('webpack-merge')
const base = require('./webpack.base.config')

const config = {
  mode: "production",
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    library: 'LazyBackground',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [
    {
      vue: 'vue'
    }
  ],
  plugins: [
    new cleanWebpackPlugin()
  ]
}
module.exports = marge(base, config)