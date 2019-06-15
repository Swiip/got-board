import { ApolloServer } from "apollo-server-micro";

import context from "./auth";
import typeDefs from "./schema";

import user from "./user";
import get from "./game/get";
import create from "./game/create";

const resolvers = {
  Query: { user, game: get },
  Mutation: { create }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context
});

export default server.createHandler({ path: "/api" });
