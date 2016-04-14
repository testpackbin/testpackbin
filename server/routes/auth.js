var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('../config');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: config.secret
});

app.use('/api/bins', jwtCheck);

app.get('/api/bins', function(req, res) {
  var mockData = [{name:"aaafff", id: "aaaarrr"}, {name:"aaaaaggg", id: "aaaahhhh"}];
  res.status(200).send(mockData);
});
