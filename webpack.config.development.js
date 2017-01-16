/* eslint-disable */
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

module.exports = Object.assign(baseConfig, {
  entry: [
    'react-hot-loader/patch'
  ].concat(baseConfig.entry),
  module: Object.assign(baseConfig.module, {
    loaders: baseConfig.module.loaders.concat([
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap'
      }
    ])
  }),
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.NamedModulesPlugin()
  ]),
  devServer: {
    headers: {
      'cache-control': 'no-store, private'
    },
    historyApiFallback: true
  },
  devtool: 'source-map'
});
