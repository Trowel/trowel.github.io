/*global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env  = require('yargs').argv.env; // use --env with webpack 2

const outputPath = '/assets/javascript'
const outputFile = 'trowel.github.io.js';
const outputFileMin = 'trowel.github.io.min.js';

const config = {
  entry: __dirname + '/scripts/main.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  }
};

var destConfig = Object.assign({}, config, {
  output: {
    path: __dirname + outputPath,
    filename: outputFile,
  },
});

var destMinConfig = Object.assign({}, config, {
  output: {
    path: __dirname + outputPath,
    filename: outputFileMin,
  },
  plugins: [
    new UglifyJsPlugin({ minimize: true }),
  ],
});


module.exports = [destConfig, destMinConfig];
