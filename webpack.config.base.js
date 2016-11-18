/* eslint-disable */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    './src/sass/main.scss',
    './src/js/index.jsx'
  ],

  output: {
    path: `${__dirname}/dist/`,
    filename: 'js/bundle.js'
  },

  resolve: {
    root: `${__dirname}/src/js/`,
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, './src')]
      },
      {
        test: /\.(html|raw)$/,
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html/index.html'
    })
  ]
};
