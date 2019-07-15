import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

import { Soldier, Knight, Ship } from "./features";
import BayOfIce from "./seas/bay-of-ice";
import TheShiveringSea from "./seas/the-shivering-sea";
import Lands from "./lands/lands";

import { useSubscription } from "../../../logic/dispatcher";
import OrderToken from "../orders/order-token";
import GameContext from "../../../logic/game/game-context";
import { mapWidth } from "../../../style/sizes";

const MapContainer = styled.svg`
  width: ${mapWidth}vw;
  height: calc(2 * 70vw);
`;

const mutation = gql`
  mutation dropOrder($uid: String!, $order: OrderInput!) {
    dropOrder(uid: $uid, order: $order) {
      uid
      title
    }
  }
`;

const toMapPosition = (clientPosition, map) => {
  const mapPosition = map.getBoundingClientRect();
  return {
    x: ((clientPosition.x - mapPosition.x) * 100) / mapPosition.width,
    y: ((clientPosition.y - mapPosition.y) * 200) / mapPosition.height
  };
};

const GameLayout = () => {
  const { game } = useContext(GameContext);

  const [activeLocation, setActiveLocation] = useState(null);

  const map = useRef();

  const dropOrderMutation = useMutation(mutation);

  useEffect(() => {
    console.log("activeLocation", activeLocation);
  }, [activeLocation]);

  useSubscription(
    "DropOrderToken",
    ({ token, position }) => {
      console.log("DropOrderToken", token, position, "on", activeLocation, map);
      const mapPosition = toMapPosition(position, map.current);
      const { i, ...order } = token;

      if (activeLocation !== null) {
        dropOrderMutation({
          variables: {
            uid: game.uid,
            order: { ...order, location: activeLocation, position: mapPosition }
          }
        });
      }
    },
    [activeLocation]
  );

  return (
    <MapContainer
      ref={map}
      viewBox="0 0 100 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image
        x="-1.1"
        y="-1.3"
        width="103"
        height="204"
        href="/static/images/westeros.png"
      />

      <BayOfIce />
      <TheShiveringSea />

      <Lands setActiveLocation={setActiveLocation} />

      <Soldier x={58} y={40} house="stark" />
      <Knight x={52} y={40} house="stark" />
      <Ship x={85} y={52} house="stark" />

      {game.orders.map(order => (
        <OrderToken token={order} />
      ))}
    </MapContainer>
  );
};

export default GameLayout;
