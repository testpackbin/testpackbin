'use strict'

var express = require('express'),
    _       = require('lodash'),
    config  = require('../config'),
    jwt     = require('jsonwebtoken'),
    User    = require('../models/User'),
    users   = require('../controllers/userCtrl');

var app = module.exports = express.Router();

// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'w@ka',
  email: 'w@ka',
  password: 'w@ka'
}];

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

function getUserScheme(req) {

  var username;
  var type;
  var userSearch = {};

  // The POST contains a username and not an email
  if(req.body.username) {
    username = req.body.username;
    type = 'username';
    userSearch = { username: username };
  }
  // The POST contains an email and not an username
  else if(req.body.email) {
    username = req.body.email;
    type = 'email';
    userSearch = { email: username };
  }

  return {
    username: username,
    type: type,
    userSearch: userSearch
  };
}

var errorMsg = {
  noPair: "You must send the username and the password",
  exists: "A user with that username already exists",
  noMatch: "The username or password don't match"
};

app.post('/api/users/create', function(req, res) {

  var userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send(errorMsg.noPair);
  }

  let profile;
  User.findOne(userScheme.userSearch, (e, user) => {
    if (user) {

     return res.status(400).send(errorMsg.exists);
    }

    profile = _.pick(req.body, userScheme.type, 'password', 'extra');

    return new User(profile).save()
  })
  .then(user => {
    res.status(201).send({
      id_token: createToken(profile)
    });
  })






});

app.post('/api/sessions/create', function(req, res) {

  var userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send(errorMsg.noPair);
  }

  var user = _.find(users, userScheme.userSearch);

  if (!user) {
    return res.status(401).send(errorMsg.noMatch);
  }

  if (user.password !== req.body.password) {
    return res.status(401).send(errorMsg.noMatch);
  }

  res.status(201).send({
    id_token: createToken(user)
  });
});
