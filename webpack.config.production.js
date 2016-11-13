/* eslint-disable */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var baseConfig = require('./webpack.config.base');

module.exports = Object.assign(baseConfig, {
  module: Object.assign(baseConfig.module, {
    loaders: baseConfig.module.loaders.concat([
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass', { publicPath: '../' })
      }
    ])
  }),
  plugins: baseConfig.plugins.concat([
    new CopyWebpackPlugin([{
      from: 'src/html/index.production.html',
      to: 'index.html'
    }]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/main.css', {})
  ])
});
