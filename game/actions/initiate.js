import { houses } from "../houses";

export default game => {
  let leftHouses = houses.map(house => house);
  return {
    ...game,
    turn: 1,
    phase: "planning",
    players: game.players.reduce((acc, player) => {
      const index = Math.floor(Math.random() * leftHouses.length);
      const house = leftHouses[index];
      leftHouses = [
        ...leftHouses.slice(0, index),
        ...leftHouses.slice(index + 1)
      ];
      return [...acc, { ...player, house }];
    }, [])
  };
};
