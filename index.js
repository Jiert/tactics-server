// Require HTTP module (to start server) and Socket.IO
var http = require('http');
var io = require('socket.io');
const {createStore} = require('redux');

const battleApp = require('./reducers');
const actions = require('./actions');
const {createNewWarrior, createNewCastle} = require('./units');

const store = createStore(battleApp);
const server = http.createServer((req, res) => {
  // Send HTML headers and message
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Socket Lover!</h1>');
});

server.listen(8080);

// Create a Socket.IO instance, passing it our server
const socket = io.listen(server);
socket.set('origins', 'http://localhost:3000');

// Subscribe to Redux
const listener = () => {
  console.log('state', store.getState());
  socket.emit('change', store.getState());
};

const unsubscribe = store.subscribe(listener);

socket.on('connection', client => {
  console.log('client connection');

  socket.emit('connect');

  client.on('getState', () => {
    socket.emit('change', store.getState());
  });

  client.on('createWarrior', (commanderId, location) => {
    const unit = createNewWarrior(commanderId);

    store.dispatch(actions.addUnit(unit));
    store.dispatch(actions.setUnitLocation(unit.id, location));
  });

  client.on('createNewCastle', (commanderId, location) => {
    const unit = createNewCastle(commanderId);

    store.dispatch(actions.addUnit(unit));
    store.dispatch(actions.setUnitLocation(unit.id, location));
  });

  client.on('setUnitLocation', (unitId, location) => {
    store.dispatch(actions.setUnitLocation(unitId, location));
  });

  client.on('updateUnit', (unitId, updates) => {
    store.dispatch(actions.updateUnit(unitId, updates));
  });

  // TODO: Limit number of requests
  client.on('submitPlayerRequest', player => {
    store.dispatch(actions.addPlayer(player));
  });

  client.on('setActivePlayer', playerId => {
    if (playerId) {
      store.dispatch(actions.setActivePlayer(playerId));
    } else {
      // only fire if we don't already have an existing active player
      const existingActivePlayer = store.getState().activePlayer !== null;
      const firstId = Object.keys(store.getState().players)[0];
      !existingActivePlayer && store.dispatch(actions.setActivePlayer(firstId));
    }
  });

  client.on('disconnect', () => {
    console.log('Client has disconnected');
  });
});
