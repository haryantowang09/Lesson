const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanzhez',
    age: 11
  }],
  _games: [{
    opponentName: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player)
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
      opponentName: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Beka', 23, 34);
team.addGame('Boko', 33, 55);
team.addGame('Moncha', 99, 0);

console.log(team.games);