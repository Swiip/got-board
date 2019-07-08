import React from "react";

import CastleBlack from "./castle-black";
import Winterfell from "./winterfell";
import TheStonyShore from "./the-stony-shore";
import Karhold from "./karhold";
import WhiteHarbor from "./white-harbor";
import WidowsWatch from "./widows-watch";

const lands = [
  CastleBlack,
  Winterfell,
  TheStonyShore,
  Karhold,
  WhiteHarbor,
  WidowsWatch
];

const Lands = ({ setActiveLocation }) =>
  lands.map(Land => (
    <Land
      key={Land.name}
      onMouseEnter={() => setActiveLocation(Land.name)}
      onMouseLeave={() => setActiveLocation(null)}
    />
  ));

export default Lands;
