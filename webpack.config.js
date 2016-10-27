// nodejs 中的path模块
var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: 'source-map',
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: path.resolve(__dirname, './app/index/index.js'),
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0']
                },
                plugins: ['transform-runtime']
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css/,
                loader: "style!css"
            },
            {
            　　test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            　　loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },

    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.resolve(__dirname, './app/index/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('styles.css')
    ]
}
