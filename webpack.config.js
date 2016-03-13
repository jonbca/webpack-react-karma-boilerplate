var process = require('process')
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var PRODUCTION = process.env['NODE_ENV'] === 'production'

var config = {
  entry: [
    './src/main'
  ],
  output: {
    publicPath: '/',
    filename: 'build/bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|test)/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      }
    ]
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss'), require('postcss-normalize')]
  },
  debug: !PRODUCTION,
  plugins: [
    new ExtractTextPlugin('build/[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

if (!PRODUCTION) {
  config.devtool = 'eval'
} else {
  config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ]);
}

module.exports = config;
