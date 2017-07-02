const initialState = {
  mode: false,
  intendedDestination: null,
  // maybe not the best place for this, but 
  attackTarget: null,
  attacking: false
};


const move = (state = initialState, action) => {
  switch (action.type) {  
    case 'SET_MOVE_ACTIVE':
      return Object.assign({}, state, {
        mode: action.payload
      })

    case 'SET_ATTACKING_UNIT':
      return Object.assign({}, state, {
        attackingUnitId: action.payload
      })

    case 'SET_DESTINATION_INTENT':
      return Object.assign({}, state, {
        intendedDestination: action.payload        
      })
      
    default:
      return state
  }
}

module.exports = move;