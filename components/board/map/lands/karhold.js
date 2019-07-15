import React from "react";

import Borders from "./borders";
import { Label, Crown } from "../features";

const Karhold = props => (
  <g {...props}>
    <Borders d="M 66,30 L 76,29 L 89,30 L 91,35 L 88,45 L 79,49 z" {...props} />
    <Label x="80" y="35" {...props}>
      Karhold
    </Label>
    <Crown x="80" y="40" {...props} />
  </g>
);

Karhold.id = "karhold";

export default Karhold;
