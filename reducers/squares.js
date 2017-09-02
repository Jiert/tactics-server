const squares = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SQUARES':
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

module.exports = squares;
