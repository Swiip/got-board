import React from "react";

import { Borders, Label, Barrel } from "../features";

const WidowsWatch = () => (
  <>
    <Borders
      d="M 73,56
         L 79,56
         L 87,67
         L 75,64
         L 74,69
         L 69,65 z"
    />
    <Label x="80" y="60">
      {`Widow's Watch`}
    </Label>
    <Barrel x="72" y="64" />
  </>
);

export default WidowsWatch;
