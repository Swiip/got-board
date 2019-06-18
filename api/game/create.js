import { generate } from "shortid";

import mongo from "../mongo";

const createId = async gameCollection => {
  const uid = generate();
  const game = await gameCollection.findOne({ uid });
  if (game) {
    return createId(gameCollection);
  }
  return uid;
};

export default async (parent, { title }, { mail }) => {
  const db = await mongo();
  const userCollection = await db.collection("user");
  const user = await userCollection.findOne({ mail });
  const gameCollection = await db.collection("game");
  const uid = await createId(gameCollection);
  const game = {
    players: [user],
    uid,
    title,
    turn: 0
  };
  await gameCollection.insertOne(game);
  return game;
};
