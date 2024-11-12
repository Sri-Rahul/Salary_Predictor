// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  cache: {
    type: 'filesystem',
    compression: 'gzip', // Enable compression to handle big strings efficiently
    cacheLocation: path.resolve(__dirname, '.webpack_cache'),
    buildDependencies: {
      config: [__filename],
    },
    managedPaths: [/* your paths */],
    maxMemoryGenerations: 1,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
};