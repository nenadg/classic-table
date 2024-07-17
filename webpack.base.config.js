const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [

    new HtmlWebPackPlugin({
      chunks: [/*'polyfills',*/ 'vendor', 'app'],
      chunksSortMode: 'auto',
   
      template: './index.html',
      inject: true
    })
  ],

  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].bundle.js',
    publicPath: 'dist/',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
};
