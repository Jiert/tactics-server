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
  },
  mountains: {
    name: 'Mountains',
    movementPenalty: 3
  }
};

const terrain = {
  ['9.14']: terrainTypes.forest,
  ['10.14']: terrainTypes.forest,
  ['10.13']: terrainTypes.forest,
  ['13.13']: terrainTypes.forest,
  ['11.14']: terrainTypes.forest,
  ['12.14']: terrainTypes.forest,
  ['11.12']: terrainTypes.forest,
  ['11.11']: terrainTypes.forest,
  ['12.11']: terrainTypes.forest,
  ['13.10']: terrainTypes.forest,
  ['14.10']: terrainTypes.forest,
  ['14.12']: terrainTypes.forest,
  ['15.9']: terrainTypes.forest,
  ['16.11']: terrainTypes.forest,
  ['18.10']: terrainTypes.forest,
  ['19.9']: terrainTypes.forest,
  ['20.9']: terrainTypes.forest,
  ['21.8']: terrainTypes.forest,
  ['22.7']: terrainTypes.forest,
  ['22.6']: terrainTypes.forest,
  ['21.6']: terrainTypes.forest,
  ['20.6']: terrainTypes.forest,
  ['19.7']: terrainTypes.forest,
  ['18.7']: terrainTypes.forest,
  ['17.8']: terrainTypes.forest,
  [`${11}.${13}`]: terrainTypes.mountains,
  [`${12}.${13}`]: terrainTypes.mountains,
  [`${12}.${12}`]: terrainTypes.mountains,
  [`${13}.${12}`]: terrainTypes.mountains,
  [`${13}.${11}`]: terrainTypes.mountains,
  [`${14}.${11}`]: terrainTypes.mountains,
  [`${15}.${11}`]: terrainTypes.mountains,
  [`${15}.${10}`]: terrainTypes.mountains,
  [`${16}.${10}`]: terrainTypes.mountains,
  [`${17}.${10}`]: terrainTypes.mountains,
  [`${17}.9`]: terrainTypes.mountains,
  [`${18}.9`]: terrainTypes.mountains,
  [`${19}.8`]: terrainTypes.mountains,
  ['18.8']: terrainTypes.mountains,
  ['20.8']: terrainTypes.mountains,
  ['20.7']: terrainTypes.mountains,
  ['21.7']: terrainTypes.mountains
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
