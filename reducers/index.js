const {combineReducers} = require('redux');

const move = require('./move');
const turn = require('./turn');
const units = require('./units');
const activeUnit = require('./activeUnit');
const unitsByLocation = require('./units-by-location');

const battleApp = combineReducers({
  move,
  turn,
  units,
  activeUnit,
  unitsByLocation
})

module.exports = battleApp;
