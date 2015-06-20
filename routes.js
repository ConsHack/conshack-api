// routes go here
var handlers = require('./handlers.js');

module.exports = [
  { path: '/', method: 'GET',
    config: { auth: false, handler: handlers.home } }
]
