// import move from './move';
// import turn from './turn';
const units = require('./units');
// import activeUnit from './activeUnit';
// import unitsByLocation from './units-by-location';
const {combineReducers} = require('redux');

// console.log(units)
// console.log(units.units)


const battleApp = combineReducers({
  // move,
  // turn,
  units
  // activeUnit,
  // unitsByLocation
})


module.exports = battleApp;
// export default battleApp;
