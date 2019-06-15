import mongo from "./mongo";

export default async (root, args, { mail }) => {
  const db = await mongo();
  const collection = await db.collection("user");
  let user = await collection.findOne({ mail });
  if (!user) {
    user = { mail, nick: mail };
    await collection.insertOne(user);
  }
  return user;
};
