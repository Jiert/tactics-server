const units = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_UNIT':
      return Object.assign({}, state, {
        [action.payload.id]: action.payload
      });

    case 'UPDATE_UNIT':
      return Object.assign({}, state, {
        [action.payload.id]: Object.assign(
          {},
          state[action.payload.id],
          action.payload.updates
        )
      });

    case 'SET_ACTIVE_PLAYER': {
      const newState = Object.assign({}, state);

      Object.keys(newState).forEach(key => {
        if (newState[key].commanderId === action.payload) {
          newState[key].movesLeft = newState[key].mobility;
        }
      });

      return newState;
    }

    default:
      return state;
  }
};

module.exports = units;
