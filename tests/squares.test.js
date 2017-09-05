/* eslint-env jest */
const initialState = {
  '9.20': {
    location: {x: 9, y: 20}
  },
  '10.20': {
    location: {x: 10, y: 20}
  }
};

const newState = {
  '9.20': {
    location: {x: 9, y: 20},
    unitId: '123'
  },
  '10.20': {
    location: {x: 10, y: 20}
  }
};

const reducer = require('../reducers/squares');

describe('squares reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('handles action SET_UNIT_AT_SQUARE', () => {
    const action = {
      type: 'SET_UNIT_AT_SQUARE',
      payload: {
        location: {x: 9, y: 20},
        unitId: '123'
      }
    };

    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('handles action CLEAR_UNIT_AT_SQUARE', () => {
    const action = {
      type: 'CLEAR_UNIT_AT_SQUARE',
      payload: {
        location: {x: 9, y: 20},
        unitId: '123'
      }
    };

    expect(reducer(newState, action)).toEqual({
      '9.20': {
        location: {x: 9, y: 20},
        unitId: null
      },
      '10.20': {
        location: {x: 10, y: 20}
      }
    });
  });
});
