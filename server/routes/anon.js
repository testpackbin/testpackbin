const
  express = require('express'),
  bins = require('./controllers/binCtrl');

var app = module.exports = express.Router();
// Bins
app.post('/api/bins', bins.create);
app.put('/api/bins', bins.update);
