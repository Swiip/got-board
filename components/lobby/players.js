import React from "react";
import { H2 } from "../ds/titles";
import { Line, Input } from "../ds/forms";

const Players = ({ players }) => (
  <>
    <H2>Players</H2>
    {players.map(player => (
      <Line key={player.nick}>
        <Input type="text" value={player.nick} readOnly />
      </Line>
    ))}
  </>
);

export default Players;
