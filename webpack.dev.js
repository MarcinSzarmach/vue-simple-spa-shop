const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const apiMocker = require("mocker-api");
const mocks = path.resolve("./src/mocks/index.js");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    hot: false,
    before(app) {
      apiMocker(app, mocks);
    }
  }
})