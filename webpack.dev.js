const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    hot: 'webpack-hot-middleware/client',
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});