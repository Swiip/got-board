import mongo from "../mongo";

export default async (parent, args, { mail }) => {
  const db = await mongo();
  const gameCollection = await db.collection("game");

  return gameCollection
    .find({
      players: { $elemMatch: { mail } }
    })
    .toArray();
};
