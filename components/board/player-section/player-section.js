import React from "react";
import styled from "@emotion/styled";

import { playerSectionWidth } from "../../../style/sizes";
import { darkGrayBg } from "../../../style/colors";
import Orders from "../orders/orders";

const Container = styled.div`
  width: ${playerSectionWidth}vw;
  background-color: ${darkGrayBg};
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const PlayerSection = ({ game }) => {
  return (
    <Container>
      <Orders game={game} />
    </Container>
  );
};
export default PlayerSection;
