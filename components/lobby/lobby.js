import React from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";

import useQuery from "../../logic/apollo/use-query";
import usePusher from "../../logic/pusher/use-pusher";

import { MainMenu } from "../ds/containers";
import { H1 } from "../ds/titles";
import Players from "./players";

const query = gql`
  query GameQuery($uid: String!) {
    game(uid: $uid) {
      title
      players {
        nick
      }
    }
  }
`;

const Board = () => {
  const {
    query: { gameId }
  } = useRouter();

  const {
    data: {
      game: { title, players }
    },
    refetch
  } = useQuery(query, { variables: { uid: gameId } });

  usePusher(`game-${gameId}`, refetch);

  return (
    <MainMenu>
      <H1 as="h2">{title}</H1>
      <p>
        Give the code
        <strong>{` ${gameId} `}</strong>
        to other players for them to join the game
      </p>
      <Players players={players} />
      <p>Please wait for other players to join the game...</p>
    </MainMenu>
  );
};

export default Board;
