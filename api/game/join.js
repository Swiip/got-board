import mongo from "../mongo";
import { notify } from "../pusher";

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
  await notify(`game-${uid}`);
  return gameCollection.findOne({ uid });
};
