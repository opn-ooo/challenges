const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 3000,
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
            '~api': path.resolve(__dirname, 'src/api/'),
            '~helpers': path.resolve(__dirname, 'src/helpers/'),
        },
    },
}
