import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

import { navigateToGame } from "../../logic/game/game-logic";
import { H2 } from "../ds/titles";
import { Line, Input } from "../ds/forms";
import { Button } from "../ds/buttons";

const mutation = gql`
  mutation join($uid: String!) {
    join(uid: $uid) {
      uid
      turn
    }
  }
`;

const Join = () => {
  const [gameId, setGameId] = useState();

  const joinMutation = useMutation(mutation, {
    variables: { uid: gameId }
  });

  const idHandler = event => setGameId(event.target.value);
  const joinHandler = async () => {
    const {
      data: { join: game }
    } = await joinMutation();
    navigateToGame(game);
  };

  return (
    <>
      <H2>Join a game</H2>
      <Line>
        <Input type="text" placeholder="Game ID" onChange={idHandler} />
        <Button type="button" onClick={joinHandler}>
          Join
        </Button>
      </Line>
    </>
  );
};

export default Join;
