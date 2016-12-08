var path              = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack           = require('webpack'),
    merge             = require('webpack-merge'),
    baseConfig        = require('./webpack.base.config'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var publicPath          = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = merge(baseConfig, {
    entry : {
        vendor: ['vue', 'vue-router'],
        app   : [path.resolve(baseConfig.rootPath, 'src/index.js'), hotMiddlewareScript]
    },
    output: {
        publicPath: publicPath,
        path      : path.resolve(baseConfig.rootPath, 'dev'),
        filename  : 'js/[name].js'//[hash]表示hash值,[name]文件名
    }
});