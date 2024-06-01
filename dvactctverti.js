const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
  
  // const totalAveragePlaytimePerGame = players.reduce((acc,player) => { acc + player;
  //   return players.playtime / players.gamesPlayed ;
  // },0);

  // const totalAveragePlaytimePerGame = (players) => players.reduce((acc , player) => {return player.playtime / player.gamesPlayed},0);
  const totalAveragePlaytimePerGame = players.reduce(((acc,player) => player.playtime / player.gamesPlayed + acc),0);
  
  
  console.log(totalAveragePlaytimePerGame);