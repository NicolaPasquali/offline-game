const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Offline Shooter',
            filename: path.join(__dirname, 'dist', 'index.html')
        })
    ]
};