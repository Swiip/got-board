import React from "react";
import styled from "@emotion/styled";

import { H1 } from "../../ds/titles";
import { orderTokens } from "../../../game/game-facts";
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
  return (
    <>
      <H1 as="h2" invert>
        Orders
      </H1>
      <OrdersContainer>
        {orderTokens().map((token, i) => (
          <OrderContainer key={i} token={token}>
            <OrderToken token={token} cx={30} cy={30} />
          </OrderContainer>
        ))}
      </OrdersContainer>
    </>
  );
};

export default Orders;
