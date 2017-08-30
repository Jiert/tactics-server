const makeId = () => {
  return `${Date.now()}-${Math.round(Math.random() * 10000000)}`;
};

module.exports = {
  createNewWarrior: commanderId => ({
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
    id: makeId(),
    name: 'Castle',
    maxHealth: 100,
    health: 100,
    mobility: 0,
    symbol: '🏰',
    commanderId
  })
};
