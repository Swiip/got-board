export const example = {
  uid: "DQSFSDF",
  title: "My super game",
  turn: 0, // 0 -> 10
  phase: "orders", // westeros, planning, action
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
      troops: ["ship", "knight", "soldier"],
      order: "attack"
    }
  },
  cards: {
    targaryen: ["card1", "card2"],
    discard: ["card3", "card4"]
  }
};

export const initial = {
  turn: 0,
  phase: "lobby",
  players: [],
  map: {
    winterfell: {
      owner: "stark",
      troops: ["knight", "soldier"]
    },
    "white-harbor": {
      owner: "stark",
      troops: ["soldier"]
    },
    "the-narrow-sea": {
      owner: "stark",
      troops: ["ship"]
    },
    pyke: {
      owner: "greyjoy",
      troops: ["knight", "soldier"]
    },
    "pyke-port": {
      owner: "greyjoy",
      troops: ["ship"]
    },
    "ironmans-bay": {
      owner: "greyjoy",
      troops: ["ship"]
    },
    "greywater-watch": {
      owner: "greyjoy",
      troops: ["soldier"]
    },
    lannisport: {
      owner: "lannister",
      troops: ["knight", "soldier"]
    },
    "the-golden-sound": {
      owner: "lannister",
      troops: ["ship"]
    },
    "the-stoney-sept": {
      owner: "lannister",
      troops: ["soldier"]
    },
    dragonstone: {
      owner: "baratheon",
      troops: ["knight", "soldier"]
    },
    "shipbreaker-bay": {
      owner: "baratheon",
      troops: ["ship", "ship"]
    },
    kingswood: {
      owner: "baratheon",
      troops: ["soldier"]
    },
    highgarden: {
      owner: "tyrell",
      troops: ["knight", "soldier"]
    },
    "dornish-marches": {
      owner: "tyrell",
      troops: ["soldier"]
    },
    "redwyne-straights": {
      owner: "tyrell",
      troops: ["ship"]
    },
    "sea-of-dorne": {
      owner: "martell",
      troops: ["ship"]
    },
    sunspear: {
      owner: "martell",
      troops: ["knight", "soldier"]
    },
    "salt-shore": {
      owner: "martell",
      troops: ["soldier"]
    }
  },
  cards: {}
};
