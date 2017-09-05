const squares = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SQUARES':
      return Object.assign({}, state, action.payload);

    case 'SET_UNIT_AT_SQUARE': {
      const location = action.payload.location;
      const coords = `${location.x}.${location.y}`;
      const square = state[coords];
      const newSquare = Object.assign({}, square, {
        // We'll use a selector on the Square component to get the unit data
        unitId: action.payload.unitId
      });

      return Object.assign({}, state, {
        [coords]: newSquare
      });
    }

    case 'CLEAR_UNIT_AT_SQUARE': {
      const location = action.payload.location;
      const coords = `${location.x}.${location.y}`;
      const square = state[coords];
      const newSquare = Object.assign({}, square, {
        unitId: null
      });

      return Object.assign({}, state, {
        [coords]: newSquare
      });
    }

    // TODO: 'SET_HIGHLIGHT_AT_SQUARE'

    // TODO: 'CLEAR_HIGHLIGHT_AT_SQUARE'

    default:
      return state;
  }
};

module.exports = squares;
