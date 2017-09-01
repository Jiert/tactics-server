const makeId = () => {
  return `${Date.now()}-${Math.round(Math.random() * 10000000)}`;
};

module.exports = {
  createNewWarrior: commanderId => ({
    attackRange: 1,
    id: makeId(),
    name: 'Warrior',
    maxHealth: 10,
    health: 10,
    mobility: 2,
    movesLeft: 0,
    symbol: '⚔',
    commanderId
  }),

  createNewCastle: commanderId => ({
    attackRange: 2,
    id: makeId(),
    name: 'Castle',
    maxHealth: 100,
    health: 100,
    mobility: 0,
    symbol: '🏰',
    commanderId
  }),

  createNewArcher: commanderId => ({
    attackRange: 2,
    id: makeId(),
    name: 'Archer',
    maxHealth: 8,
    health: 8,
    mobility: 2,
    symbol: '🏰',
    commanderId
  })
};
