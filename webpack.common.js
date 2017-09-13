const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: {
    main: './app/app.js',
    // hot: 'webpack-hot-middleware/client',
    vendor: ['lodash']
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(jade|pug)$/, use: ['pug-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
      { test: /\.js$/, exclude: /(node_modules)/, use: { loader: 'babel-loader', options: { presets: ['env'] } } }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: 'public/views/index.jade' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common' })
  ]
}

module.exports = config;
