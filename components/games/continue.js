import React from "react";
import gql from "graphql-tag";
import Router from "next/router";

import useQuery from "../../logic/apollo/use-query";

import { H2 } from "../ds/titles";
import { Line, Input } from "../ds/forms";
import { Button } from "../ds/buttons";

const query = gql`
  query GamesQuery {
    games {
      uid
      title
    }
  }
`;

const Continue = () => {
  const { games } = useQuery(query);

  const goHandler = uid => () => {
    Router.push(`/game/${uid}`);
  };

  return (
    <>
      <H2>Continue a game</H2>
      {games.map(game => (
        <Line key={game.uid}>
          <Input type="text" value={game.title} readOnly />
          <Button onClick={goHandler(game.uid)}>Go</Button>
        </Line>
      ))}
    </>
  );
};

export default Continue;
