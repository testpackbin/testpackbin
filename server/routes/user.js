'use strict'
const
  express = require('express'),
  users = require('../controllers/userCtrl');

var app = module.exports = express.Router();

app.post('/api/login', users.login);
app.post('/api/users', users.create);
