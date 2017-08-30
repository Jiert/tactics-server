const unitsByLocation = (state = {}, action) => {
  switch (action.type) {
    case 'SET_UNIT_LOCATION': {
      // TODO: Make sure we can override before we set

      const location = action.payload.location;
      const coords = `${location.x}.${location.y}`;

      return Object.assign({}, state, {
        [coords]: action.payload.id
      });
    }

    default:
      return state;
  }
};

module.exports = unitsByLocation;
