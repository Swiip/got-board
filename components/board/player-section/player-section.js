import React from "react";
import styled from "@emotion/styled";

import { darkGrayBg } from "../../../style/colors";
import Orders from "./orders";

const Container = styled.div`
  width: 10vw;
  background-color: ${darkGrayBg};
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const PlayerSection = () => (
  <Container>
    <Orders />
  </Container>
);

export default PlayerSection;
