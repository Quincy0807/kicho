const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDashboard = require('webpack-dashboard/plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint',
    }],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.pug$/,
        loader: 'pug',
      },
    ],
  },
  resolve: {
    alias: {
      components: './components',
    },
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom',
      fs: 'fs',
    }),
    new WebpackDashboard(),
    new HtmlWebpackPlugin({
      filename: 'kicho.html',
      hash: true,
      inject: 'body',
      template: './src/index.pug',
    }),
  ],
  target: 'electron',
  externals: [
    nodeExternals(),
  ],
};
