// if we define these as functions and not modules, 
//we can pass them arround on both sides

const units = (state = {}, action) => { 
  switch (action.type) {  
    case 'ADD_UNIT':
      return Object.assign({}, state, {
        [action.payload.id]: action.payload
      });

    // case 'UPDATE_UNIT':
    //   return Object.assign({}, state, {
    //     [action.payload.id]: {
    //       ...state[action.payload.id],
    //       ...action.payload.updates
    //     }        
    //   })

    default:
      return state
  }
};

module.exports = units;
