import React from "react";
import styled from "@emotion/styled";

import CastleBlack from "./lands/castle-black";
import Winterfell from "./lands/winterfell";
import TheStonyShore from "./lands/the-stony-shore";

const MapContainer = styled.svg`
  width: 70vw;
  height: calc(2 * 70vw);
`;

const GameLayout = () => {
  return (
    <MapContainer viewBox="0 0 100 200">
      <image
        x="0"
        y="0"
        width="100"
        height="200"
        href="/static/images/westeros.png"
      />

      <CastleBlack />
      <Winterfell />
      <TheStonyShore />
    </MapContainer>
  );
};

export default GameLayout;
