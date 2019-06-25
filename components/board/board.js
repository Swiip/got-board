import React from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";

import useQuery from "../../logic/apollo/use-query";

import { MainBoard } from "../ds/containers";
import PlayerSection from "./player-section";
import Tracks from "./tracks";
import Map from "./map/map";
import Metadata from "./metadata";

const query = gql`
  query GameQuery($uid: String!) {
    game(uid: $uid) {
      title
    }
  }
`;

const Board = () => {
  const {
    query: { gameId }
  } = useRouter();

  const {
    data: { game }
  } = useQuery(query, { variables: { uid: gameId } });

  return (
    <>
      <Metadata game={game} />
      <MainBoard>
        <PlayerSection />
        <Map />
        <Tracks />
      </MainBoard>
    </>
  );
};

export default Board;
