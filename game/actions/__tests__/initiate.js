import initiate from "../initiate";

test("initiate must give a different house to each players", () => {
  const game = {
    players: [
      { mail: "1" },
      { mail: "2" },
      { mail: "3" },
      { mail: "4" },
      { mail: "5" },
      { mail: "6" }
    ]
  };
  const gameModified = initiate(game);
  const houses = gameModified.players.map(player => player.house);
  expect(houses).toEqual([...new Set(houses)]);
});
