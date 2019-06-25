import mongo from "../mongo";
import { notify } from "../pusher";

import initiate from "../../game/actions/initiate";

export default async (parent, { uid }, { mail }) => {
  const db = await mongo();
  const userCollection = await db.collection("user");
  const user = await userCollection.findOne({ mail });
  const gameCollection = await db.collection("game");
  await gameCollection.updateOne(
    {
      uid,
      players: { $not: { $elemMatch: { mail } } }
    },
    {
      $push: { players: user }
    }
  );
  let game = await gameCollection.findOne({ uid });
  if (game.players.length === 6) {
    game = initiate(game);
  }
  await notify(`game-${uid}`);
  return game;
};
