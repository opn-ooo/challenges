const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv-flow')
const dotenvExpand = require('dotenv-expand')

const env = dotenv.config({
    path: path.resolve(process.cwd(), 'config'),
})
const config = dotenvExpand(env).parsed

const envKeys = Object.keys(config).reduce((prev, next) => {
    prev[next] = JSON.stringify(config[next])
    return prev
}, {})

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    mode: process.env.NODE_ENV || 'production',
    devtool: 'inline-source-map',

    devServer: {
        inline: true,
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3000,
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: 'public',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    resolve: {
        alias: {
            '~root': path.resolve(__dirname, 'src/'),
            '~api': path.resolve(__dirname, 'src/api/'),
            '~constants': path.resolve(__dirname, 'src/constants/'),
            '~helpers': path.resolve(__dirname, 'src/helpers/'),
            '~hooks': path.resolve(__dirname, 'src/hooks/'),
            '~modules': path.resolve(__dirname, 'src/modules/'),
        },
    },

    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: envKeys,
            },
        }),
    ],
}
