import { ApolloServer } from "apollo-server-micro";

import context from "./auth";
import mongo from "./mongo";
import typeDefs from "./schema";

const resolvers = {
  Query: {
    hello: (root, args, { mail }) => {
      return `Hello world! It's your boy, how far now unicodeveloper ${mail}`;
    },
    user: async (root, args, { mail }) => {
      const db = await mongo();
      const collection = await db.collection("user");
      let user = await collection.findOne({ mail });
      if (!user) {
        user = { mail, nick: mail };
        await collection.insertOne(user);
      }
      return user;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context
});

export default server.createHandler({ path: "/api" });
