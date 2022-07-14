const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaders = extra => {
    const loader = [
        {loader: MiniCssExtractPlugin.loader,
            options: {},
        }, 'css-loader'
    ]

    if (extra) {
        loader.push(extra)
    }

    return loader
}

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 7200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
     
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: cssLoaders()
              },
              {
                test: /\.scss$/i,
                use: cssLoaders('sass-loader')
              }
        ]
    }
}