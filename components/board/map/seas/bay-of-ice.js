import React from "react";

import { SeaBorders, Label } from "../features";

const BayOfIce = () => (
  <>
    <SeaBorders
      d="M -5,-5
         L 15,-5
         L 15,12
         L 32,22
         L 50,20
         L 43,25
         L 44,34
         L 35,31
         L 20,33
         L 21,46 
         L 15,52 
         L 13,65 
         L 18,64 
         L 23,74 
         L 40,72
         L 28,74
         L 23,78
         L 19,77
         L -5,77 z"
    />
    <Label x="10" y="25">
      Bay of Ice
    </Label>
  </>
);

export default BayOfIce;
