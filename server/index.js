const
  express = require('express'),
  mongoose = require('mongoose'),
  config = require('../config'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  cors = require('cors'),
  http = require('http'),
  errorhandler = require('errorhandler'),
  dotenv = require('dotenv');

const app = express();

app.use(bodyParser.json());


mongoose.connect(config.mongoURI[process.env.NODE_ENV || 'development'], function(err, res) {
  if (err) {
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to database: ', config.mongoURI[app.settings.env] || 'development');
  }
})



dotenv.load();

// Parsers
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cors())
  .use(function(err, req, res, next) {
    if (err.name === 'StatusError') {
      res.send(err.status, err.message);
    } else {
      next(err);
    }
  });

if (process.env.NODE_ENV === 'development') {
  app
    .use(logger('dev'))
    .use(errorhandler());
}

app
  .use(require('./routes/anon'))
  .use(require('./routes/auth'))
  .use(require('./routes/user'))
  .use(function(req, res){
    res.sendfile('../index.html');
  });

module.exports = app;
