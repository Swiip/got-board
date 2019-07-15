import React, { useContext } from "react";
import styled from "@emotion/styled";

import GameContext from "../../logic/game/game-context";

import { darkGrayBg } from "../../style/colors";
import { H2 } from "../ds/titles";

const Container = styled.div`
  background-color: ${darkGrayBg};
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const Title = styled(H2)`
  margin: 10px;
  text-align: center;
`;

const Metadata = () => {
  const {
    game: { title }
  } = useContext(GameContext);

  return (
    <Container>
      <Title invert>{title}</Title>
    </Container>
  );
};

export default Metadata;
