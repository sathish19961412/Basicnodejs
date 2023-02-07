//Module File
const http = require('http');
const route= require('./routes');

console.log(route.someText);
var server=http.createServer(route.handler);
server.listen(1996);
