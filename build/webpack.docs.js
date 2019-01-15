'use strict'

const merge = require('webpack-merge');
const webpack = require('webpack');

const options = require('./options');
const baseConfig = require('./webpack.base.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = merge(baseConfig, {
  entry: options.paths.resolve('docs-src/index.js'),

  output: {
    filename: 'docs.js',
    path: options.paths.output.docs
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
    new MiniCssExtractPlugin({
      filename: 'docs.css'
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    // Set the production environment
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      VERSION: JSON.stringify(options.version)
    })
  ]
});

config.module.rules.push({
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader'
  ]
});

module.exports = config;
