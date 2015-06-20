// if you want to run the Just the API server without front-end run this file
var Hapi    = require('hapi');
var Joi     = require('joi');
var ES      = require('esta');  // https://github.com/nelsonic/esta
var port    = process.env.PORT || 1337; // heroku define port or use 1337
var server  = new Hapi.Server();

server.connection({ port: port });

var routes = require('./routes.js');

server.addRoutes(routes);

server.start()

server.start();
console.log('Now Visit: http://localhost:'+port);

module.exports = server;
