import React, { useContext } from "react";
import styled from "@emotion/styled";

import GameContext from "../../../logic/game/game-context";

import { H1 } from "../../ds/titles";
import { orderTokens, substractOrders } from "../../../game/orders";
import OrderContainer from "./order-container";
import OrderToken from "./order-token";

const OrdersContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Orders = () => {
  const tokens = orderTokens();

  const { player, game } = useContext(GameContext);

  const playerTokensOnBoard = game.orders.filter(
    order => order.owner === player.house
  );

  const leftTokens = substractOrders(tokens, playerTokensOnBoard);

  leftTokens.forEach(token => {
    token.position = { x: 3, y: 3 };
  });

  return (
    <>
      <H1 as="h2" invert>
        Orders
      </H1>
      <OrdersContainer>
        {leftTokens.map((token, i) => (
          <OrderContainer key={i} token={token}>
            <OrderToken token={token} />
          </OrderContainer>
        ))}
      </OrdersContainer>
    </>
  );
};

export default Orders;
