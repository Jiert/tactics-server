const players = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      // TODO: Checking existing players before we add new
      return Object.assign({}, state, {
        [action.payload.id]: action.payload
      });

    case 'SET_ACTIVE_PLAYER':
      if (!action.payload) {
        return Object.keys(state)[0];
      }

    default:
      return state;
  }
};

module.exports = players;
