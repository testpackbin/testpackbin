var app = require('./server'),
    http = require('http');

process.env.NODE_ENV = 'development';
var server = http.createServer(app);

server.listen(3500);

if (module.hot) {

  // This will handle HMR and reload the server
  module.hot.accept('./server', function() {
    server.removeListener('request', app);
    app = require('./server');
    server.on('request', app);
    console.log('Server reloaded!');
  });
}
