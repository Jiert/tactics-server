const {combineReducers} = require('redux');
const turn = require('./turn');
const units = require('./units');
const players = require('./players');
const unitsByLocation = require('./units-by-location');

const battleApp = combineReducers({
  turn,
  units,
  players,
  unitsByLocation
})

module.exports = battleApp;
