import { useRouter } from "next/router";
import gql from "graphql-tag";

import useQuery from "../../logic/apollo/use-query";

const query = gql`
  query GameQuery($uid: String!) {
    game(uid: $uid) {
      title
    }
  }
`;

const Game = () => {
  const {
    query: { gameId }
  } = useRouter();

  const {
    game: { title }
  } = useQuery(query, { variables: { uid: gameId } });

  return `hello world ${title}`;
};

export default Game;
