const path              = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
    output : {
        path     : path.resolve(__dirname, './public/js'),
        filename : 'srp.bundle.min.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJsPlugin()
    ]
});
