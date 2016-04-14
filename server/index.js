var logger          = require('morgan'),
    cors            = require('cors'),
    http            = require('http'),
    express         = require('express'),
    errorhandler    = require('errorhandler'),
    dotenv          = require('dotenv'),
    bodyParser      = require('body-parser');

var app = express();

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
