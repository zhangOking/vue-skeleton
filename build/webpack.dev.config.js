const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const marge = require('webpack-merge')
const base = require('./webpack.base.config')

const config = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)/,
        loader: "file-loader",
        options: {
          name: '[name]-[hash:8].[ext]'
        }
      }
    ]
  },
  devServer: {
    open: true,
    port: 10000
  },
  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}
module.exports = marge(base, config)