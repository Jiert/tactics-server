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

const locationsForPlayer = {
  0: {
    units: [{x: 4, y: 6}, {x: 6, y: 6}, {x: 6, y: 4}],
    castle: {x: 4, y: 4}
  },
  1: {
    units: [{x: 27, y: 15}, {x: 25, y: 15}, {x: 25, y: 17}],
    castle: {x: 27, y: 17}
  }
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
  locationsForPlayer,
  getSquares: () => getSquares(board.height, board.width)
};
