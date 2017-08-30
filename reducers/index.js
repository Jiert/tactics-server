const {combineReducers} = require('redux');
const turn = require('./turn');
const units = require('./units');
const players = require('./players');
const activePlayer = require('./active-player');
const unitsByLocation = require('./units-by-location');

const battleApp = combineReducers({
  turn,
  units,
  players,
  activePlayer,
  unitsByLocation
});

module.exports = battleApp;
