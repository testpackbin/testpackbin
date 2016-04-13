var express = require('express');
var user = require('./controllers/userCtrl');

var app = express();

app.post('/api/login', user.login);

app.get('/', function(req, res) {
  return res.send(fs.readFileSync(path.resolve('..', 'index.html')));
});

module.exports = app;
