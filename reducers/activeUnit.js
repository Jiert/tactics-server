const activeUnit = (state = {}, action) => {
  switch (action.type) {  
    case 'SET_ACTIVE_UNIT':
      return {
        id: action.payload.id,
        location: action.payload.location
      }

    default:
      return state
  }
}

export default activeUnit;