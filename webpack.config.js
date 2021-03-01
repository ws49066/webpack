const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPLugin = require('css-minimizer-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    devServer: {
        contentBase: './build',
        port: 9000
    },
    // optimization:{
    //     minimize:true,
    //     minimizer: [new CssMinimizerPLugin({ test: /\.css$/})]
    // },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: '**/*.html',  context: 'src/' }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)$/,
                use: ['file-loader']
            }
        ]
    }
}