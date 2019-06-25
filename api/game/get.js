import mongo from "../mongo";

import playerFilter from "../../game/player-filter";

export default async (root, { uid }, { mail }) => {
  const db = await mongo();
  const collection = await db.collection("game");
  const game = await collection.findOne({
    uid,
    players: { $elemMatch: { mail } }
  });
  return playerFilter(game, mail);
};
