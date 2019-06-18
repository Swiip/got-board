import { gql } from "apollo-server-micro";

export default gql`
  type User {
    mail: String
    nick: String
  }

  type Game {
    uid: String
    title: String
    turn: Int
  }

  type Query {
    user: User
    games: [Game]
    game(uid: String): Game
  }

  type Mutation {
    create(title: String): Game
  }
`;
