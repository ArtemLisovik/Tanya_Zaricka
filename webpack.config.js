const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const loader = require('sass-loader');


module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 7200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/pages/main.html',
            filename: 'main.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'portfolio.html',
            template: './src/pages/portfolio.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, './src/assets'), to: path.resolve(__dirname, './dist/assets') }
            ]
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(woff|eot|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `./fonts/[name].[ext]`
                    },
                }]
            },
            {
                test: /\.(jpeg|svg|gif|jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `./img/[name].[ext]`
                    },
                }]
            },


        ]
    },
    watch: true
}