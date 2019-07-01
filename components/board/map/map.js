import React from "react";
import styled from "@emotion/styled";

import CastleBlack from "./lands/castle-black";
import Winterfell from "./lands/winterfell";
import TheStonyShore from "./lands/the-stony-shore";
import Karhold from "./lands/karhold";
import WhiteHarbor from "./lands/white-harbor";
import WidowsWatch from "./lands/widows-watch";
import { Soldier, Knight, Ship } from "./features";
import BayOfIce from "./seas/bay-of-ice";
import TheShiveringSea from "./seas/the-shivering-sea";

const MapContainer = styled.svg`
  width: 70vw;
  height: calc(2 * 70vw);
`;

const GameLayout = () => {
  return (
    <MapContainer viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
      <image
        x="-1.1"
        y="-1.3"
        width="103"
        height="204"
        href="/static/images/westeros.png"
      />

      <BayOfIce />
      <TheShiveringSea />

      <CastleBlack />
      <Winterfell />
      <TheStonyShore />
      <Karhold />
      <WhiteHarbor />
      <WidowsWatch />

      <Soldier x={58} y={40} house="stark" />
      <Knight x={52} y={40} house="stark" />
      <Ship x={85} y={52} house="stark" />

      {/* <rect fill="red" x="0" y="0" width="100%" height="100%" /> */}
    </MapContainer>
  );
};

export default GameLayout;
