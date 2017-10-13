const addUnit = unit => {
  return {
    type: 'ADD_UNIT',
    payload: unit
  };
};

const updateUnit = (id, updates) => {
  return {
    type: 'UPDATE_UNIT',
    payload: {id, updates}
  };
};

// TODO: Remove in favor of setUnitAtSquare
const setUnitLocation = (id, location) => {
  return {
    type: 'SET_UNIT_LOCATION',
    payload: {id, location}
  };
};

const setUnitAtSquare = (unitId, location) => ({
  type: 'SET_UNIT_AT_SQUARE',
  payload: {unitId, location}
});

const finishTurn = id => {
  return {
    type: 'FINISH_TURN'
  };
};

const addPlayer = player => {
  return {
    type: 'ADD_PLAYER',
    payload: player
  };
};

const setActivePlayer = playerId => {
  return {
    type: 'SET_ACTIVE_PLAYER',
    payload: playerId
  };
};

const setSquares = squares => {
  return {
    type: 'SET_SQUARES',
    payload: squares
  };
};

module.exports = {
  addUnit,
  addPlayer,
  updateUnit,
  finishTurn,
  setSquares,
  setActivePlayer,
  setUnitLocation,
  setUnitAtSquare
};
