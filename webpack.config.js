const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: '**/*.html',  context: 'src/' }
            ]
        })
    ]
}