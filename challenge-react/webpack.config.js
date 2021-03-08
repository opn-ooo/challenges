const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const env = dotenvExpand(dotenv.config()).parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[next] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: [
    'react-app-polyfill/ie9',
    'react-app-polyfill/stable',
    './src/index.jsx',
  ],
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
        test: /\.js$|jsx/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@/': path.resolve(__dirname, 'src/'),
      '@/api': path.resolve(__dirname, 'src/api/'),
      '@/constants': path.resolve(__dirname, 'src/constants/'),
      '@/containers': path.resolve(__dirname, 'src/containers/'),
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/pages': path.resolve(__dirname, 'src/pages/'),
      '@/helpers': path.resolve(__dirname, 'src/helpers/'),
      '@/hooks': path.resolve(__dirname, 'src/hooks/'),
      '@/modules': path.resolve(__dirname, 'src/modules/'),
      '@/layouts': path.resolve(__dirname, 'src/layouts'),
      '@/routers': path.resolve(__dirname, 'src/routers'),
      '@/store': path.resolve(__dirname, 'src/store'),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: envKeys,
      },
    }),
  ],
};
