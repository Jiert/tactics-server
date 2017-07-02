// Require HTTP module (to start server) and Socket.IO
var http = require('http');
var io = require('socket.io');
const {createStore} = require('redux');

const battleApp = require('./reducers');
const actions = require('./actions');


const createNewWarrior = () => ({
  id: new Date().toISOString(),
  name: 'Warrior',
  maxHealth: 10,
  health: 10,
  mobility: 2,
  symbol: '⚔'
})

/*  
  You may optionally specify the initial state as the second 
  argument to createStore(). This is useful for hydrating the state of the client 
  to match the state of a Redux application running on the server.

  let store = createStore(todoApp, window.STATE_FROM_SERVER)

  We could do that here to get state from a db
*/


let store = createStore(battleApp);

console.log('initial store state: ', store.getState())

store.dispatch(actions.addUnit(createNewWarrior()))

console.log('new store state: ', store.getState())

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
  client.on('addUnit', (unit, location) => {
    // socket.emit('addUnit', unit, location);

  })

  client.on('setUnitLocation', (unitId, location) => {
    socket.emit('setUnitLocation', unitId, location);
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

  client.on('disconnect', function() {
    console.log('Client has disconnected');
  });

});