var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './src/main'
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|test)/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      }
    ]
  },
  debug: true
}
