const path              = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      webpack           = require('webpack'),
      // CopyWebpackPlugin = require('copy-webpack-plugin'),
      merge             = require('webpack-merge'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '../');
const srcPath  = path.resolve(__dirname, '../src');
module.exports = {
    rootPath : rootPath,
    module   : {
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.vue$/, loader: 'vue'}
        ]
    },
    resolve  : {
        extensions: ['', '.js', '.vue'],
        alias     : {
            'vue'       : path.resolve(rootPath, 'node_modules/vue/dist/vue.min.js'),
            'vue-router': path.resolve(rootPath, 'node_modules/vue-router/dist/vue-router.min.js'),
            'nm:'       : path.resolve(rootPath, 'node_modules'),
            'src:'      : srcPath
        }
    },
    externals: {},
    plugins  : [
        // new CopyWebpackPlugin([
        //     {from: path.resolve(srcPath, 'assets'), to: 'assets'}
        // ]),
        // new webpack.DllPlugin({
        //     path   : path.resolve(rootPath, 'bin/manifest.json'),
        //     name   : '[name]',
        //     context: __dirname,
        // }),
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./css/[name].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(srcPath, 'index.html')
        })
    ]
};