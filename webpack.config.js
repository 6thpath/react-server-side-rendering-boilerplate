const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { NODE_ENV } = process.env
const isProduction = NODE_ENV === 'production'

module.exports = () => ({
  mode: NODE_ENV,
  watch: !isProduction,
  watchOptions: {
    ignored: /node_modules/
  },
  entry: {
    bundle: path.join(__dirname, '/src/bundle.js')
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: [
            '@babel/plugin-transform-spread',
            '@babel/plugin-proposal-class-properties',
            '@babel/transform-runtime',
            '@babel/plugin-proposal-optional-chaining'
          ]
        }
      }
    ]
  }
})
