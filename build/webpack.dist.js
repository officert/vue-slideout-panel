'use strict'

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const merge = require('webpack-merge');
const webpack = require('webpack');

const options = require('./options');
const baseConfig = require('./webpack.base.js');

const config = merge(baseConfig, {
  // without this, webpack throws in a polyfill for node.js's Buffer class
  node: {
    Buffer: false,
    process: false
  },
  entry: options.paths.resolve('src/index.js'),
  output: {
    filename: options.isProduction ? 'vue2-slideout-panel.min.js' : 'vue2-slideout-panel.js',
    path: options.paths.output.main,
    libraryTarget: 'umd'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: 4,
        uglifyOptions: {
          warnings: false,
          compress: {
            warnings: false
          },
        },
      })
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: options.banner,
      raw: true,
      entryOnly: true
    })
  ]
});

// debug and production
config.plugins = config.plugins.concat([
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(options.version)
  })
]);

if (options.isProduction) {
  config.plugins.push(
    // Set the production environment
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  );
}

config.module.rules.push({
  test: /\.css$/,
  use: [
    options.isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
    'css-loader'
  ]
});

config.plugins.push(
  new MiniCssExtractPlugin({
    filename: options.isProduction ? 'vue2-slideout-panel.min.css' : 'vue2-slideout-panel.css',
    disable: !options.isProduction
  })
);

module.exports = config;
