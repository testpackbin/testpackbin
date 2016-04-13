var express = require('express');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackMiddleware = require('webpack-dev-middleware');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var server = require('http').createServer();
var fs = require('fs');
var path = require('path');

var app = express();

var compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  publicPath: '../public',
  contentBase: 'app',
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: true,
    chunksModules: false,
    modules: false
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/public'))

var indexHtml = fs.readFileSync(path.resolve('index.html')).toString()
app.get('/public/bundle.js', function(req, res) {
  return res.send(fs.readFileSync(path.resolve('public', 'bundle.js').toString()))
})
app.get('*', function(req, res) {
  return res.send(indexHtml);
});


module.exports = {
  app: app,
  server: server
};
