
const addUnit = unit => {
  console.log('addUnit called ', unit)
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

const setActiveUnit = (id, location) => {
  return {
    type: 'SET_ACTIVE_UNIT',
    payload: {id, location}
  }
}

const setUnitLocation = (id, location) => {
  return {
    type: 'SET_UNIT_LOCATION',
    payload: {id, location}
  }
}

const setMoveMode = bool => {
  return {
    type: 'SET_MOVE_ACTIVE',
    payload: bool
  }
}

const setDestinationIntent = location => {
  return {
    type: 'SET_DESTINATION_INTENT',
    payload: location
  }
}

const setAttackingUnit = id => {
  return {
    type: 'SET_ATTACKING_UNIT',
    payload: id
  }
}

const finishTurn = id => {
  return {
    type: 'FINISH_TURN'
  }
}

module.exports = {
  addUnit,
  updateUnit,
  setActiveUnit,
  setUnitLocation,
  setMoveMode,
  setDestinationIntent,
  setAttackingUnit,
  finishTurn
}
