const board = {
  height: 20,
  width: 30
};

const terrainTypes = {
  plains: {
    name: 'Plains',
    movementPenalty: 1
  },
  hills: {
    name: 'Hills',
    movementPenalty: 2
  },
  forest: {
    name: 'Forest',
    movementPenalty: 2
  }
};

const terrain = {
  [15.11]: terrainTypes.plains,
  [14.11]: terrainTypes.forest,
  [16.11]: terrainTypes.forest,
  [`${14}.${10}`]: terrainTypes.hills
};

const getSquares = (height, width) => {
  const squares = {};

  // This looping strategy doesn't make sense with objects I guess
  for (var y = height; y >= 1; y--) {
    for (var x = 1; x <= width; x++) {
      squares[`${x}.${y}`] = {
        location: {x, y},
        type: terrain[`${x}.${y}`]
      };
    }
  }

  return squares;
};

module.exports = {
  getSquares: () => getSquares(board.height, board.width)
};
