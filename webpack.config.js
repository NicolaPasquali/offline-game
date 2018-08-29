const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const glob = require('glob');

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
            filename: path.join(__dirname, 'dist', 'index.html'),
            template: path.join(__dirname, 'src', 'index.html'),
            minify: false
        }),
        new ImageminPlugin({
            externalImages: {
                context: 'src/assets', // Important! This tells the plugin where to "base" the paths at
                sources: glob.sync('src/assets/*.png'),
                destination: 'dist/assets'
            }
        })
    ]
};