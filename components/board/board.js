import React from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import styled from "@emotion/styled";

import useQuery from "../../logic/apollo/use-query";

import { MainBoard } from "../ds/containers";
import Map from "./map";

const Side = styled.div`
  width: 30vw;
`;

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
    game: { title }
  } = useQuery(query, { variables: { uid: gameId } });

  console.log("title", title);

  return (
    <MainBoard>
      <Map />
      <Side />
    </MainBoard>
  );
};

export default Board;
