var path = require('path')

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    files: ['test/test.bundle.js'],
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      'test/test.bundle.js': ['webpack', 'sourcemap']
    },

    reporters: ['mocha'],

    singleRun: true,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
            }
          }
        ]
      }
    },
  })
}
