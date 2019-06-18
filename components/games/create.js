import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";
import Router from "next/router";

import { H2 } from "../ds/titles";
import { Line, Input } from "../ds/forms";
import { Button } from "../ds/buttons";

const mutation = gql`
  mutation create($title: String!) {
    create(title: $title) {
      uid
      title
    }
  }
`;

const Create = () => {
  const [gameTitle, setGameTitle] = useState();

  const createMutation = useMutation(mutation, {
    variables: { title: gameTitle }
  });

  const titleHander = event => setGameTitle(event.target.value);
  const createHandler = async () => {
    const {
      data: {
        create: { uid }
      }
    } = await createMutation();
    Router.push(`/board/${uid}`);
  };

  return (
    <>
      <H2>Create a game</H2>
      <Line>
        <Input
          id="create-title"
          type="text"
          placeholder="Game title"
          onChange={titleHander}
        />
        <Button type="button" onClick={createHandler}>
          Create
        </Button>
      </Line>
    </>
  );
};

export default Create;
