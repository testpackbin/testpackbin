const express = require('express');
const user = require('./controllers/userCtrl');
const mongoose = require('mongoose');
const config = require('../config');
const bins = require('./controllers/binCtrl');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


mongoose.connect(config.mongoURI[process.env.NODE_ENV || 'development'], function(err, res) {
  if (err) {
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to database: ', config.mongoURI[app.settings.env] || 'development');
  }
})


// Bins
app.post('/api/bins', bins.create);
app.put('/api/bins', bins.update);

// Users
app.post('/api/login', user.login);
app.post('/api/users', user.create);


app.get('/', function(req, res) {
  return res.send(fs.readFileSync(path.resolve('..', 'index.html')));
});

module.exports = app;
