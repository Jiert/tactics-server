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

module.exports = {
  addUnit,
  updateUnit,
  setUnitLocation,
  finishTurn
}
