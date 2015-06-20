var Hapi   = require('hapi');
var port   = process.env.PORT || 1337; // heroku define port or use 1337
var server = new Hapi.Server();
server.connection({ port: port });
server.route(require('./routes.js'));
server.start(function(){ console.log('Now Visit: http://localhost:'+port) });
module.exports = server;
