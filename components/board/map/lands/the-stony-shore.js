import React from "react";

import Borders from "./borders";
import { Label, Barrel } from "../features";

const TheStonyShore = props => (
  <g {...props}>
    <Borders
      d="M 22,47
         L 33,49
         L 40,57
         L 32,73
         L 23,73
         L 18,63 
         L 14,64 
         L 16,52 z"
      {...props}
    />
    <Label x="26" y="55" {...props}>
      The Stony Shore
    </Label>
    <Barrel x="28" y="65" {...props} />
  </g>
);

export default TheStonyShore;
