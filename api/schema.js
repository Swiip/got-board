import { gql } from "apollo-server-micro";

export default gql`
  type User {
    house: House
    mail: String
    nick: String
  }

  type Game {
    uid: String
    title: String
    turn: Int
    players: [User]
    orders: [Order]
  }

  type Position {
    x: Float
    y: Float
  }

  enum House {
    Stark
    Greyjoy
    Lannister
    Baratheon
    Martel
    Tyrell
  }

  enum OrderType {
    raid
    march
    defense
    support
    consolidate
  }

  type Order {
    owner: House
    type: OrderType
    normal: Boolean
    position: Position
    location: String
  }

  input PositionInput {
    x: Float
    y: Float
  }

  input OrderInput {
    type: OrderType
    normal: Boolean
    position: PositionInput
    location: String
  }

  type Query {
    user: User
    games: [Game]
    game(uid: String): Game
  }

  type Mutation {
    create(title: String): Game
    join(uid: String): Game
    dropOrder(uid: String, order: OrderInput): Game
  }
`;
