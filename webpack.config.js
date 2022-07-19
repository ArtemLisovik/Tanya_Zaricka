const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


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
            filename: './pages/main.html'
        }),
        new HTMLWebpackPlugin({
            filename: './pages/portfolio.html',
            template: './src/pages/portfolio.html'
        }),
        new HTMLWebpackPlugin({
            filename: './pages/about.html',
            template: './src/pages/about.html'
        }),
        new HTMLWebpackPlugin({
            filename: './pages/contacts.html',
            template: './src/pages/contacts.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, './src/assets'), to: path.resolve(__dirname, './dist/assets') }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        })
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
            // {
            //     test: /\.(woff|eot|ttf)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: `./fonts/[name].[ext]`
            //         },
            //     }]
            // },
            // {
            //     test: /\.(jpeg|svg|gif|jpg)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: `./img/[name].[ext]`
            //         },
            //     }]
            // },


        ]
    },
    watch: true
}