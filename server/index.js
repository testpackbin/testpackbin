var express = require('express');
var user = require('./controllers/userCtrl');
var mongoose = require('mongoose');
var config = require('../config');

var app = express();


mongoose.connect(config.mongoURI[process.env.NODE_ENV || 'development'], function(err, res) {
  if (err) {
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to database: ', config.mongoURI[app.settings.env] || 'development');
  }
})

app.post('/api/login', user.login);

app.get('/', function(req, res) {
  return res.send(fs.readFileSync(path.resolve('..', 'index.html')));
});

module.exports = app;
