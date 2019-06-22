const game = {
  uid: "DQSFSDF",
  title: "My super game",
  turn: 0, // 0 -> 10
  phase: "orders", // orders, resolution, wildlings
  players: [
    {
      mail: "matthieu.lux@gmail.com",
      nick: "Swiip",
      house: "targaryen"
    }
  ],
  map: {
    id1: {
      owner: "targaryen",
      troops: ["ship", "knight", "solider"],
      order: "attack"
    }
  },
  cards: {
    targaryen: ["card1", "card2"],
    discard: ["card3", "card4"]
  }
};

export default game;
