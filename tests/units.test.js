const reducer = require('../reducers/units');

describe('units reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('handles action ADD_UNIT', () => {
    const action = {
      type: 'ADD_UNIT',
      payload: {
        name: 'Stands with Fist',
        id: '123'
      }
    };

    expect(reducer({}, action)).toEqual({
      '123': {
        name: 'Stands with Fist',
        id: '123'
      }
    });
  });

  it('handles action UPDATE_UNIT', () => {
    const state = {
      '123': {
        id: '123',
        name: 'Drogon',
        health: 10
      }
    };

    const action = {
      type: 'UPDATE_UNIT',
      payload: {
        id: '123',
        updates: {
          health: 3
        }
      }
    };

    expect(reducer(state, action)).toEqual({
      '123': {
        id: '123',
        name: 'Drogon',
        health: 3
      }
    });
  });

  it('handles action SET_ACTIVE_PLAYER', () => {
    const updatingUnit = {
      mobility: 2,
      movesLeft: 0,
      commanderId: 'abc'
    };

    const updatedUnit = {
      mobility: 2,
      movesLeft: 2,
      commanderId: 'abc'
    };

    const state = {
      '123': updatingUnit,
      '456': updatingUnit,
      '789': {
        mobility: 2,
        movesLeft: 0,
        commanderId: 'def'
      }
    };

    const action = {
      type: 'SET_ACTIVE_PLAYER',
      payload: 'abc'
    };

    const expectedState = {
      '123': updatedUnit,
      '456': updatedUnit,
      '789': {
        mobility: 2,
        movesLeft: 0,
        commanderId: 'def'
      }
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
