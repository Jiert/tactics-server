const turn = (state = 0, action) => {
  switch (action.type) {  
    case 'FINISH_TURN':
      const turn = state + 1;

      return turn;

    default:
      return state;
  }
}

export default turn;