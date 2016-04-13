var server = require('./server');

console.log('Running TestPackBin version:', require('./package.json').version);

server.server.on('request', server.app);

server.server.listen(3000);
