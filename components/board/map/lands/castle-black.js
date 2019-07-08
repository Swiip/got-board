import React from "react";

import Borders from "./borders";
import { Label, Crown } from "../features";

const CastleBlack = props => (
  <g {...props}>
    <Borders d="M 55,18 L 72,18 L 76,28 L 65,29 L 45,34 L 44,25 z" />
    <Label x="60" y="22">
      Castle Black
    </Label>
    <Crown x="50" y="28" />
  </g>
);

export default CastleBlack;
