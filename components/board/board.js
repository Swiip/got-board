import React from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";

import useQuery from "../../logic/apollo/use-query";
import GameContext from "../../logic/game/game-context";

import { MainBoard } from "../ds/containers";
import PlayerSection from "./player-section/player-section";
import Tracks from "./tracks";
import Map from "./map/map";
import Metadata from "./metadata";

const userQuery = gql`
  query UserQuery {
    user {
      mail
    }
  }
`;

const gameQuery = gql`
  query GameQuery($uid: String!) {
    game(uid: $uid) {
      uid
      title
      players {
        mail
        house
        nick
      }
      orders {
        type
        normal
        position {
          x
          y
        }
        location
        owner
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
      user: { mail }
    }
  } = useQuery(userQuery);

  const {
    data: { game }
  } = useQuery(gameQuery, { variables: { uid: gameId } });

  const player = game.players.find(p => p.mail === mail);

  return (
    <GameContext.Provider value={{ player, game }}>
      <Metadata />
      <MainBoard>
        <PlayerSection />
        <Map />
        <Tracks />
      </MainBoard>
    </GameContext.Provider>
  );
};

export default Board;
