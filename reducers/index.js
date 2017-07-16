const {combineReducers} = require('redux');
const turn = require('./turn');
const units = require('./units');
const unitsByLocation = require('./units-by-location');

const battleApp = combineReducers({
  turn,
  units,
  unitsByLocation
})

module.exports = battleApp;
