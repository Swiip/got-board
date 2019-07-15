import React from "react";

import Borders from "./borders";
import { Label, Barrel } from "../features";

const WidowsWatch = props => (
  <g {...props}>
    <Borders
      d="M 73,56
         L 79,56
         L 87,67
         L 75,64
         L 74,69
         L 69,65 z"
      {...props}
    />
    <Label x="80" y="60" {...props}>
      {`Widow's Watch`}
    </Label>
    <Barrel x="72" y="64" {...props} />
  </g>
);

WidowsWatch.id = "widows-watch";

export default WidowsWatch;
