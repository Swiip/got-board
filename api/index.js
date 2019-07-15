import { ApolloServer } from "apollo-server-micro";

import context from "./auth";
import typeDefs from "./schema";

import user from "./user";
import get from "./game/get";
import getAll from "./game/getAll";
import create from "./game/create";
import join from "./game/join";
import dropOrder from "./game/drop-order";

const resolvers = {
  Query: { user, games: getAll, game: get },
  Mutation: { create, join, dropOrder }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context
});

export default server.createHandler({ path: "/api" });
