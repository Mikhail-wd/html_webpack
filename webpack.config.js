const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
         clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Webpack Example App',
            header: 'Webpack Example Title',
            metaDesc: 'Webpack Example Description',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin(
            {
                filename: "assets/styles/[name].css"
            }
        ),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    name: 'assets/images/[name].[ext]',
                },
            },
            {
                test: /\.(ttf|eot|otf|woff)$/i,
                type: 'asset/resource'
            }
        ],
    },
    mode: 'development',
    devServer: {
        static: './dist',
        open: true,
        port: 3000,
        liveReload: true
    }
};