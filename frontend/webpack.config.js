const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'), // webpack entry point. Module to start building dependency graph
  output: {
    path: path.resolve(__dirname, '/dist'), // Folder to store generated bundle
    filename: 'bundle.js', // Name of generated bundle after build
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '/public/index.html'),
      filename: './index.html',
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
};
