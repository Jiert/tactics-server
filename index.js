// Require HTTP module (to start server) and Socket.IO
var http = require('http');
var io = require('socket.io');

// Start the server at port 8080
var server = http.createServer(function(req, res){ 
  // Send HTML headers and message
  res.writeHead(200,{ 'Content-Type': 'text/html' }); 
  res.end('<h1>Hello Socket Lover!</h1>');
});

server.listen(8080);

// Create a Socket.IO instance, passing it our server
// io.set('origins', 'http://localhost:3000');
var socket = io.listen(server);

socket.set('origins', 'http://localhost:3000');

const players = [];

// Add a connect listener
socket.on('connection', function(client){ 

  // Success!  Now listen to messages to be received
  client.on('turn',function(event){ 
    console.log('Received message from client!',event);
  });

  // Testing idea of reacting to emits
  // Listen for emit, then dispatch action
  client.on('addUnit', unit => {
    socket.emit('addUnit', unit);
  }) 

  // Will this work a second time?
  client.on('setActiveUnit', (unitId, location) => {
    socket.emit('setActiveUnit', unitId, location);
  })

  client.on('player', player => {

    if (players.length < 2) {
      players.push(player)
      socket.emit('playerAdded', player)
    } else {
      socket.emit('error', 'too many players')
    }

    socket.emit('players', players);
    console.log('players', players);
  })

  client.on('disconnect',function(){
    console.log('Server has disconnected');
  });

});