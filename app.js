const http = require('http');
const requestHandler = require('./routes');

var server=http.createServer(requestHandler);
server.listen(1996);
