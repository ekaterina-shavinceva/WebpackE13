const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './',
        port: 3001,
        hot: true,
        open: true,
    },
});
