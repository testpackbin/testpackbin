const
  express = require('express'),
  jwt = require('express-jwt'),
  config = require('../config'),
  users = require('../controllers/userCtrl'),
  bins = require('../controllers/binCtrl');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: config.secret
});

// Users
app.put('/api/users', jwtCheck, users.update);
app.get('/api/users/index', users.index);
app.get('/api/users/:id', users.show);
app.delete('/api/users/:id', users.delete);

// Bins
app.delete('/api/bins/:id', bins.delete);
