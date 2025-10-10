const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './js/header.js',
    body: './js/body.js',
    footer: './js/footer.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map', // pour debugger facilement
  devServer: {
    static: './public',
    port: 8564,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: { filename: 'images/[name][ext]' },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
      templateContent: '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Holberton Dashboard</title></head><body><div id="app"></div></body></html>',
      inject: 'body',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // sépare jQuery et Lodash pour réduire la taille
    },
  },
};
