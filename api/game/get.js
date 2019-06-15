import mongo from "../mongo";

export default async (root, { uid }) => {
  const db = await mongo();
  const collection = await db.collection("game");
  return collection.findOne({ uid });
};
