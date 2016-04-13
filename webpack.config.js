var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve('app', 'main.js')
  ],
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    debug: true,
    devtool: 'source-map',
    loaders: [{
      test: /\.css?$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"],
        "plugins": [
          ["transform-decorators-legacy"]
        ]
      }
    }]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    root: path.resolve('./app')
  }
};
