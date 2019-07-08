import React from "react";

import Borders from "./borders";
import { Label, Fort } from "../features";

const WhiteHarbor = props => (
  <g {...props}>
    <Borders
      d="M 68,45
         L 79,53
         L 79,55
         L 72,55
         L 68,65
         L 74,70
         L 72,75
         L 63,77
         L 59,68
         L 53,70
         L 56,58 z"
      {...props}
    />
    <Label x="66" y="55" {...props}>
      White Harbor
    </Label>
    <Fort x="62" y="62" {...props} />
  </g>
);

export default WhiteHarbor;
