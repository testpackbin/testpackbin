var express = require('express');

var app = express();

app.get('/', function(req, res) {
  return res.send(fs.readFileSync(path.resolve('..', 'index.html')));
});

module.exports = app;
