module.exports = {
  createNewWarrior: commanderId => ({
    id: Date.now(),
    name: 'Warrior',
    maxHealth: 10,
    health: 10,
    mobility: 2,
    movesLeft: 0,
    symbol: '⚔',
    commanderId
  }),

  createNewCastle: commanderId => ({
    id: Date.now(),
    name: 'Castle',
    maxHealth: 100,
    health: 100,
    mobility: 0,
    symbol: '🏰',
    commanderId
  })
};
