const activePlayer = (state = {}, action) => {
  switch (action.type) {  
    case 'SET_ACTIVE_PLAYER':
      return action.payload

    default:
      return state;
  }
}

module.exports = activePlayer;
