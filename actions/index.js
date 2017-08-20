const addUnit = unit => {
  return {
    type: 'ADD_UNIT',
    payload: unit
  }
}

const updateUnit = (id, updates) => {
  return {
    type: 'UPDATE_UNIT',
    payload: {id, updates}
  }
}

const setUnitLocation = (id, location) => {
  return {
    type: 'SET_UNIT_LOCATION',
    payload: {id, location}
  }
}

const finishTurn = id => {
  return {
    type: 'FINISH_TURN'
  }
}

const addPlayer = player => {
  return {
    type: 'ADD_PLAYER',
    payload: player
  }
}

const setActivePlayer = playerId => {
  return {
    type: 'SET_ACTIVE_PLAYER',
    payload: playerId
  }
}

module.exports = {
  addUnit,
  addPlayer,
  updateUnit,
  finishTurn,
  setActivePlayer,
  setUnitLocation
}
