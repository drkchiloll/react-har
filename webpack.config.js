var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders : [{
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.(json)$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    }, {
      test: /\.(svg|ttf|woff|woff2|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HAR Viewer (React Deep Dive)'
    })
  ],
  devtool: 'source-map'
};
