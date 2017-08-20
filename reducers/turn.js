const turn = (state = 0, action) => {
  switch (action.type) {  
    case 'FINISH_TURN':
      const turn = state + 1;

      return turn;

    default:
      return state;
  }
}

module.exports = turn;

/* 

  Thoughts on turns

  Each player has a turn (not sure how to determine the first)

  During that turn, the player moves / acttacks with their units. At some point
  the player will click "next turn", at which point the other player gets a turn.

  When player 2 clicks "next turn", we start the cycle over

  so.. how to do we represent this in state

  we could have an activePLayer in state, and switch back and forth. This would make 
  it easy to know who's turn it was. The reducer will just switch to ther OTHER 
  player. Do... we even need a turn counter? (we could have the turn reducer just Math.floor as we 
  switch sides, and pass in .5 or something)

  we could also have a turn counter, but each turn represents a player turn, and for
  2 players, we could just say even turns are for 1 player, and odd turns are for the other

  let's do the first option for now, and ignore the



*/ 