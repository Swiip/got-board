import { gql } from "apollo-server-micro";

export default gql`
  type User {
    mail: String
    nick: String
  }

  type Game {
    uid: String
    title: String
    toto: String
  }

  type Query {
    hello: String
    user: User
    games: [Game]
    game(uid: String): Game
  }

  type Mutation {
    create(title: String): Game
  }
`;
