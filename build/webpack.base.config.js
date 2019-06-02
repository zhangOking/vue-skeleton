const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve(__dirname, '../'),
  module: {
    rules: [{
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {

          }
        }
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => autoprefixer({
                browsers: ['last 3 versions', '> 1%']
              })
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ]
      }, 
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.js']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}