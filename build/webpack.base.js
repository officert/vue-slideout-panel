'use strict';

const options = require('./options');
const autoprefixer = require('autoprefixer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  resolve: {
    modules: [
      options.paths.root,
      options.paths.resolve('node_modules')
    ],
    alias: {
      src: 'src',
      vue$: 'vue/dist/vue.common.js'
    },
    extensions: ['.js', '.json', '.vue', '.less']
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [
            autoprefixer({
              browsers: ['last 2 versions', 'ie > 9', 'Firefox ESR']
            })
          ]
        }
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
    // new BundleAnalyzerPlugin()
  ]
};
