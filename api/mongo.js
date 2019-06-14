const { MongoClient } = require("mongodb");

const { MONGO_HOST, MONGO_USER, MONGO_PASSWORD, MONGO_DB } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;

let cache = null;

export default async () => {
  if (cache !== null) {
    return cache;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true });

  const db = await client.db(MONGO_DB);

  cache = db;
  return db;
};
