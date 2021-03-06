import React from "react";

import Borders from "./borders";
import { Label, Castle, Crown, Barrel } from "../features";

const Winterfell = props => (
  <g {...props}>
    <Borders
      d="M 21,34
         L 35,32
         L 45,35
         L 65,30
         L 77,47
         L 76,50
         L 68,44
         L 55,58
         L 52,70
         L 41,72 
         L 33,73 
         L 41,57 
         L 34,48 
         L 25,47 
         L 22,45 z"
      {...props}
    />
    <Label x="42" y="42" {...props}>
      Winterfell
    </Label>
    <Castle x="49" y="50" {...props} />
    <Crown x="45" y="58" {...props} />
    <Barrel x="51" y="58" {...props} />
  </g>
);

Winterfell.id = "winterfell";

export default Winterfell;
