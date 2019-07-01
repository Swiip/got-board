export const houses = [
  "stark",
  "greyjoy",
  "lannister",
  "tyrell",
  "baratheon",
  "martell"
];

export const lands = {
  "castle-black": {
    features: ["crown"],
    links: {
      seas: ["bay-of-ice", "the-shivering-sea"],
      lands: ["winterfell", "karhold"]
    }
  },
  winterfell: {
    features: ["castle", "stark", "crown", "barrel"],
    links: {
      seas: ["bay-of-ice", "the-shivering-sea"],
      lands: [
        "castle-black",
        "karhold",
        "the-stony-shore",
        "moat-calin",
        "white-harbor"
      ]
    }
  },
  karhold: {
    features: ["crown"],
    links: {
      seas: ["the-shivering-sea"],
      lands: ["castle-black", "winterfell"]
    }
  },
  "the-stony-shore": {
    features: ["barrel"],
    links: { seas: ["bay-of-ice"], lands: ["winterfell"] }
  },
  "white-harbor": {
    features: ["fort"],
    links: {
      seas: ["the-shivering-sea", "the-narrow-sea"],
      lands: ["winterfell", "moat-calin", "widows-watch"]
    }
  },
  "widows-watch": {
    features: ["barrel"],
    links: {
      seas: ["the-shivering-sea", "the-narrow-sea"],
      lands: ["white-harbor"]
    }
  },
  "flints-finger": {
    features: ["fort"],
    links: {
      seas: ["bay-of-ice", "sunset-sea", "ironmans-bay"],
      lands: ["greywater-watch"]
    }
  },
  "greywater-watch": {
    features: ["barrel"],
    links: {
      seas: ["bay-of-ice", "ironmans-bay"],
      lands: ["flints-finger", "seagard", "moat-calin"]
    }
  },
  "moat-calin": {
    features: ["fort"],
    links: {
      seas: ["the-narrow-sea"],
      lands: [
        "winterfell",
        "white-harbor",
        "greywater-watch",
        "seagard",
        "the-twins"
      ]
    }
  },
  pyke: {
    features: ["castel", "greyjoy", "crown", "barrel"],
    links: { seas: ["ironmans-bay"], lands: [] }
  },
  seagard: {
    features: ["castle", "crown", "barrel"],
    links: {
      seas: ["ironmans-bay"],
      lands: ["greywater-watch", "moat-calin", "the-twins", "riverrun"]
    }
  },
  "the-twins": {
    features: ["crown"],
    links: {
      seas: ["the-narrow-sea"],
      lands: [
        "moat-calin",
        "seagard",
        "the-fingers",
        "the-mountains-of-the-moon"
      ]
    }
  },
  "the-fingers": {
    features: ["barrel"],
    links: {
      seas: ["the-narrow-sea"],
      lands: ["the-twins", "the-mountains-of-the-moon"]
    }
  },
  riverrun: {
    features: ["castle", "crown", "barrel"],
    links: {
      seas: ["ironmans-bay", "the-golden-sound"],
      lands: ["seagard", "lannisport", "stoney-sept", "harrenhal"]
    }
  },
  "the-mountains-of-the-moon": {
    features: ["barrel"],
    links: {
      seas: ["the-narrow-sea"],
      lands: ["the-twins", "the-fingers", "the-eyrie", "cracklaw-point"]
    }
  },
  "the-eyrie": {
    features: ["fort", "crown", "barrel"],
    links: { seas: ["the-narrow-sea"], lands: ["the-mountains-of-the-moon"] }
  },
  lannisport: {
    features: ["castle", "lannister", "barrel", "barrel"],
    links: {
      seas: ["the-golden-sound"],
      lands: ["riverrun", "stoney-sept", "searoad-marches"]
    }
  },
  "stoney-sept": {
    features: ["fort"],
    links: {
      seas: [],
      lands: [
        "lannisport",
        "riverrun",
        "harrenhal",
        "blackwater",
        "searoad-marches"
      ]
    }
  },
  harrenhal: {
    features: ["fort", "crown"],
    links: {
      seas: [],
      lands: ["riverrun", "cracklaw-point", "blackwater", "stoney-sept"]
    }
  },
  "cracklaw-point": {
    features: ["fort"],
    links: {
      seas: ["the-narrow-sea", "shipbreaker-bay", "blackwater-bay"],
      lands: [
        "the-mountains-of-the-moon",
        "harrenhal",
        "blackwater",
        "kings-landing"
      ]
    }
  },
  "searoad-marches": {
    features: ["barrel"],
    links: {
      seas: ["the-golden-sound", "sunset-sea", "west-summer-sea"],
      lands: [
        "lannisport",
        "stoney-sept",
        "blackwater",
        "the-reach",
        "highgarden"
      ]
    }
  },
  blackwater: {
    features: ["barrel", "barrel"],
    links: {
      seas: [],
      lands: [
        "searoad-marches",
        "stoney-sept",
        "harrenhal",
        "cracklaw-point",
        "kings-landing",
        "the-reach"
      ]
    }
  },
  "kings-landing": {
    features: ["castel", "crown", "crown"],
    links: {
      seas: ["blackwater-bay"],
      lands: ["cracklaw-point", "blackwater", "the-reach", "kingswood"]
    }
  },
  highgarden: {
    features: ["castel", "tyrell", "barrel", "barrel"],
    links: {
      seas: ["west-summer-sea", "redwyne-straights"],
      lands: ["searoad-marches", "the-reach", "dornish-marches", "oldtown"]
    }
  },
  "the-reach": {
    features: ["fort"],
    links: {
      seas: [],
      lands: [
        "searoad-marches",
        "blackwater",
        "kings-landing",
        "kingswood",
        "the-boneway",
        "dornish-marches",
        "highgarden"
      ]
    }
  },
  kingswood: {
    features: ["crown", "barrel"],
    links: {
      seas: ["blackwater-bay", "shipbreaker-bay"],
      lands: ["kings-landing", "the-reach", "the-boneway", "storms-end"]
    }
  },
  oldtown: {
    features: ["castle"],
    links: {
      seas: ["redwyne-straights"],
      lands: ["highgarden", "dornish-marches", "three-towers"]
    }
  },
  "dornish-marches": {
    features: ["crown"],
    links: {
      seas: [],
      lands: [
        "the-reach",
        "the-boneway",
        "princes-pass",
        "three-towers",
        "oldtown",
        "highgarden"
      ]
    }
  },
  "storms-end": {
    features: ["fort"],
    links: {
      seas: ["shipbreaker-bay", "east-summer-sea", "sea-of-dorne"],
      lands: ["kingswood", "the-boneway"]
    }
  },
  dragonstone: {
    features: ["castel", "baratheon", "crown", "barrel"],
    links: { seas: ["shipbreaker-bay"], lands: [] }
  },
  "the-arbor": {
    features: ["crown"],
    links: { seas: ["west-summer-sea", "redwyne-straights"], lands: [] }
  },
  "three-towers": {
    features: ["barrel"],
    links: {
      seas: ["west-summer-sea", "redwyne-straights"],
      lands: ["oldtown", "dornish-marches", "princes-pass", "starfall"]
    }
  },
  "princes-pass": {
    features: ["crown", "barrel"],
    links: {
      seas: [],
      lands: [
        "dornish-marches",
        "the-boneway",
        "ybonwood",
        "starfall",
        "three-towers"
      ]
    }
  },
  "the-boneway": {
    features: ["crown"],
    links: {
      seas: ["sea-of-dorne"],
      lands: [
        "storms-end",
        "kingswood",
        "the-reach",
        "dornish-marches",
        "princes-pass",
        "ybonwood"
      ]
    }
  },
  starfall: {
    features: ["fort", "barrel"],
    links: {
      seas: ["west-summer-sea", "east-summer-sea"],
      lands: ["princes-pass", "ybonwood", "salt-shore"]
    }
  },
  ybonwood: {
    features: ["fort"],
    links: {
      seas: ["sea-of-dorne"],
      lands: [
        "the-boneway",
        "princes-pass",
        "starfall",
        "salt-shore",
        "sunspear"
      ]
    }
  },
  "salt-shore": {
    features: ["barrel"],
    links: {
      seas: ["east-summer-sea"],
      lands: ["starfall", "ybonwood", "sunspear"]
    }
  },
  sunspear: {
    features: ["castel", "martell", "crown", "barrel"],
    links: {
      seas: ["east-summer-sea", "sea-of-dorne"],
      lands: ["ybonwood", "salt-shore"]
    }
  }
};

export const seas = {
  "bay-of-ice": {
    title: "Bay of Ice",
    links: {
      seas: ["sunset-sea"],
      lands: [
        "castle-black",
        "winterfell",
        "the-stony-shore",
        "greywater-watch",
        "flints-finger"
      ]
    }
  },
  "sunset-sea": {
    title: "Sunset Sea",
    links: {
      seas: [
        "bay-of-ice",
        "ironmans-bay",
        "the-golden-sound",
        "west-summer-sea"
      ],
      lands: ["flints-finger", "searoad-marches"]
    }
  },
  "ironmans-bay": {
    title: "Ironman's Bay",
    links: {
      seas: ["sunset-sea", "the-golden-sound"],
      lands: ["pyke", "flints-finger", "greywater-watch", "seagard", "riverrun"]
    }
  },
  "the-golden-sound": {
    title: "The Golden Sound",
    links: {
      seas: ["ironmans-bay", "sunset-sea"],
      lands: ["riverrun", "lannisport", "searoad-marches"]
    }
  },
  "west-summer-sea": {
    title: "West Summer Sea",
    links: {
      seas: ["sunset-sea", "redwyne-straights", "east-summer-sea"],
      lands: [
        "the-arbor",
        "searoad-marches",
        "highgarden",
        "three-towers",
        "starfall"
      ]
    }
  },
  "redwyne-straights": {
    title: "Rewyn Straights",
    links: {
      seas: ["west-summer-sea"],
      lands: ["highgarden", "oldtown", "three-towers", "the-arbor"]
    }
  },
  "east-summer-sea": {
    title: "East Summer Sea",
    links: {
      seas: ["west-summer-sea", "sea-of-dorne", "shipbreaker-bay"],
      lands: ["starfall", "salt-shore", "sunspear", "storms-end"]
    }
  },
  "sea-of-dorne": {
    title: "Sea Of Dorne",
    links: {
      seas: ["east-summer-sea"],
      lands: ["sunspear", "ybonwood", "the-boneway", "storms-end"]
    }
  },
  "shipbreaker-bay": {
    title: "Shipsbreaker Bay",
    links: {
      seas: ["east-summer-sea", "blackwater-bay", "the-narrow-sea"],
      lands: ["storms-end", "kingswood", "cracklaw-point", "dragonstone"]
    }
  },
  "blackwater-bay": {
    title: "Blackwater Bay",
    links: {
      seas: ["shipbreaker-bay"],
      lands: ["kingswood", "kings-landing", "cracklaw-point"]
    }
  },
  "the-narrow-sea": {
    title: "The Narrow Sea",
    links: {
      seas: ["shipbreaker-bay", "the-shivering-sea"],
      lands: [
        "cracklaw-point",
        "the-mountains-of-the-moon",
        "the-eyrie",
        "the-fingers",
        "the-twins",
        "moat-calin",
        "white-harbor",
        "widows-watch"
      ]
    }
  },
  "the-shivering-sea": {
    title: "The Shivering Sea",
    links: {
      seas: ["the-narrow-sea"],
      lands: [
        "widows-watch",
        "white-harbor",
        "winterfell",
        "karhold",
        "castle-black"
      ]
    }
  }
};

export const ports = {
  winterfell: {},
  "white-harbor": {},
  pike: {},
  lannisport: {},
  dragonstone: {},
  oldtown: {},
  "storms-end": {},
  sunspear: {}
};

export const orders = ["raid", "march", "defense", "support", "consolidate"];

export const ordersQuantity = {
  normal: 2,
  special: 1
};

export const orderModifyers = {
  march: {
    normal: 0,
    special: 1
  },
  defense: {
    normal: 1,
    special: 2
  },
  support: {
    special: 1
  }
};

export const orderTokens = () =>
  [
    ...[...Array(ordersQuantity.normal)]
      .map(() => orders.map(order => ({ type: order, normal: true })))
      .flat(),
    ...[...Array(ordersQuantity.special)]
      .map(() => orders.map(order => ({ type: order, normal: false })))
      .flat()
  ].sort((a, b) => {
    if (a.type === b.type) {
      if (a.normal === b.normal) {
        return 0;
      }
      if (a.normal > b.normal) {
        return 1;
      }
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return -1;
  });

export const orderModifyer = order => {
  if (orderModifyers[order.type]) {
    return orderModifyers[order.type][order.normal ? "normal" : "special"];
  }
  return undefined;
};
