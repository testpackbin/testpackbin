var app = require('./server'),
    http = require('http');

process.env.NODE_ENV = 'test';
var server = http.createServer(app);

server.listen(4000);
