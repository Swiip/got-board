import mongo from "../mongo";
import { notify } from "../pusher";

export default async (parent, { uid, order }, { mail }) => {
  const db = await mongo();
  // const userCollection = await db.collection("user");
  // const user = await userCollection.findOne({ mail });

  console.log("order", order);

  const gameCollection = await db.collection("game");
  await gameCollection.updateOne(
    {
      uid
    },
    {
      $push: { orders: order }
    }
  );
  const game = await gameCollection.findOne({ uid });
  await notify(`game-${uid}`);
  return game;
};
