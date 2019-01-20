'use strict'

const merge = require('webpack-merge');
const webpack = require('webpack');

const options = require('./options');
const baseConfig = require('./webpack.base.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const config = merge(baseConfig, {
  entry: options.paths.resolve('docs-src/index.js'),

  output: {
    filename: 'docs.js',
    path: options.paths.output.docs
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      }),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'docs.css',
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

config.module.rules[0].options.loaders = {
  less: 'vue-style-loader!css-loader!less-loader'
};
config.module.rules.push({
    test: /\.css$/,
    use: [
      'vue-style-loader',
      'css-loader'
    ]
});

module.exports = config;
