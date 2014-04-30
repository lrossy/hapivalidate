var Hapi = require('hapi');
var Joi = require('joi')

// Create a server with a host and port
var server = Hapi.createServer('0.0.0.0', 8000);
console.log('here');
// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {

        reply('hello world');
    },
config:{
      validate: {
        path: {
          id: Joi.number()
        }
      }
}
});

// Start the server
server.start();
