import React from "react";
import gql from "graphql-tag";

import { navigateToGame } from "../../logic/game/game-logic";
import useQuery from "../../logic/apollo/use-query";

import { H2 } from "../ds/titles";
import { Line, Input100, Input400 } from "../ds/forms";
import { Button } from "../ds/buttons";

const query = gql`
  query GamesQuery {
    games {
      uid
      title
      turn
    }
  }
`;

const turnLabel = turn => (turn === 0 ? "Lobby" : `Turn ${turn}`);

const Continue = () => {
  const {
    data: { games }
  } = useQuery(query);

  const goHandler = game => () => navigateToGame(game);

  return (
    <>
      <H2>Continue a game</H2>
      {games.map(game => (
        <Line key={game.uid}>
          <Input400 type="text" value={game.title} readOnly />
          <Input100 type="text" value={turnLabel(game.turn)} readOnly />
          <Button onClick={goHandler(game)}>Go</Button>
        </Line>
      ))}
    </>
  );
};

export default Continue;
