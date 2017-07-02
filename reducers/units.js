module.exports = (state = {}, action) => { 
  switch (action.type) {  
    case 'ADD_UNIT':
      const newState = Object.assign({}, state, {
        [action.payload.id]: action.payload
      });

      console.log('we are in the reducer with new state: ')
      return newState;
        // ...state,
        // [action.payload.id]: action.payload
      // }

    // case 'UPDATE_UNIT':
    //   return {
    //     ...state,
    //     [action.payload.id]: {
    //       ...state[action.payload.id],
    //       ...action.payload.updates
    //     }
    //   } 

    default:
      return state
  }
};

