
const addUnit = unit => {
  console.log('addUnit called ', unit)
  return {
    type: 'ADD_UNIT',
    payload: unit
  }
}


module.exports = {
  addUnit
}

// export const updateUnit = (id, updates) => {
//   return {
//     type: 'UPDATE_UNIT',
//     payload: {id, updates}
//   }
// }

// export const setActiveUnit = (id, location) => {
//   return {
//     type: 'SET_ACTIVE_UNIT',
//     payload: {id, location}
//   }
// }

// export const setUnitLocation = (id, location) => {
//   return {
//     type: 'SET_UNIT_LOCATION',
//     payload: {id, location}
//   }
// }

// export const setMoveMode = bool => {
//   return {
//     type: 'SET_MOVE_ACTIVE',
//     payload: bool
//   }
// }

// export const setDestinationIntent = location => {
//   return {
//     type: 'SET_DESTINATION_INTENT',
//     payload: location
//   }
// }

// export const setAttackingUnit = id => {
//   return {
//     type: 'SET_ATTACKING_UNIT',
//     payload: id
//   }
// }

// export const finishTurn = id => {
//   return {
//     type: 'FINISH_TURN'
//   }
// }