const path = require('path');

module.exports = ({ isProduction = false }) => {
  return {
    entry: [
      '@babel/polyfill',
      isProduction ? './src/index.jsx' : './dev-entrypoint.js',
    ],
    output: {
      path: path.resolve(__dirname, './deploy/public/dist'),
      chunkFilename: '[chunkhash].bundle.js',
      filename: 'main.js',
      publicPath: '/dist/',
    },
    mode: isProduction ? 'production' : 'development',
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    devServer: {
      port: 8888,
      host: '0.0.0.0',
      contentBase: path.resolve(__dirname, './deploy/public'),
      hot: true,
      historyApiFallback: true,
    },
  };
};
