const
  express = require('express'),
  jwt = require('express-jwt'),
  config = require('../config'),
  users = require('../controllers/userCtrl');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: config.secret
});

// Users
app.put('/api/users', jwtCheck, users.update);
app.get('/api/users/:id', jwtCheck, users.show);
