import React from "react";
import styled from "@emotion/styled";

const MapContainer = styled.svg`
  width: 70vw;
  height: calc((2678 / 1338) * 70vw);
`;

const GameLayout = () => {
  return (
    <MapContainer>
      <image
        x="0"
        y="0"
        width="100%"
        height="100%"
        href="/static/images/westeros.png"
      />

      <circle cx="150" cy="100" r="80" fill="green" />

      <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">
        SVG
      </text>
    </MapContainer>
  );
};

export default GameLayout;
