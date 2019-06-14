import { gql } from "apollo-server-micro";

export default gql`
  type User {
    mail: String
    nick: String
  }

  type Query {
    hello: String
    user: User
  }
`;
