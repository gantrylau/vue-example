var path       = require('path'),
    webpack    = require('webpack'),
    merge      = require('webpack-merge'),
    baseConfig = require('./webpack.base.config');

var publicPath = '/ng2-example/dev';
module.exports = merge(baseConfig, {
    entry : {
        vendor: ['@angular/core', '@angular/router', '@angular/common', '@angular/compiler', '@angular/forms', '@angular/http', '@angular/platform-browser', '@angular/platform-browser-dynamic', '@angular/upgrade'],
        main  : [baseConfig.rootPath + '/src/main.ts']
    },
    output: {
        // publicPath: publicPath,
        path    : path.resolve(baseConfig.rootPath, 'dev'),
        filename: 'js/[name].js'//[hash]表示hash值,[name]文件名
    }
});