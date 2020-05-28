const webpack = require('webpack');
const path = require('path');
const src_path = path.resolve(__dirname, '../client/src');
const public_path = path.resolve(__dirname, './client/public');

module.exports = {
  entry: [src_path + '/index.js'],
  output: {
    path: public_path,
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    port: process.env.PORT || 8000,
    compress: true,
    contentBase: path.join(__dirname, './client/public'),
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};