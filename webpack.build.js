const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Offline Shooter',
            filename: path.join(__dirname, 'dist', 'index.html'),
            template: 'src/index.html',
            minify: true,
        })
    ]
};