const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const { NODE_ENV } = process.env
const devMode = NODE_ENV !== 'production'

module.exports = () => ({
  mode: NODE_ENV,
  watch: devMode,
  watchOptions: {
    ignored: /node_modules/
  },
  entry: {
    bundle: path.join(__dirname, '/src/bundle.js')
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new OptimizeCSSAssetsPlugin({})
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
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './assets/'
            }
          },
          'css-loader',
          'less-loader' // compiles Less to CSS
        ]
      }
    ]
  }
})
