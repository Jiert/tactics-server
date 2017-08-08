const players = (state = {}, action) => {
  switch (action.type) {  
    case 'ADD_PLAYER':
      // TODO: Checking existing players before we add new
      return Object.assign({}, state, {
        [action.payload.id]: action.payload
      });

    default:
      return state
  }
}

module.exports = players;
