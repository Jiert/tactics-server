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
      })

    default:
      return state
  }
};

module.exports = units;

