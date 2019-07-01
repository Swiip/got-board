import React from "react";
import styled from "@emotion/styled";

import { H1 } from "../../ds/titles";
import { orderTokens } from "../../../game/game-facts";
import OrderToken from "./order-token";

const OrdersContainer = styled.svg`
  width: 100%;
  height: 550px;
`;

const Orders = () => (
  <>
    <H1 as="h2" invert>
      Orders
    </H1>
    <OrdersContainer>
      {orderTokens().map((token, i) => (
        <OrderToken
          token={token}
          cx={30 + 70 * (i % 2)}
          cy={30 + 70 * Math.floor(i / 2)}
        />
      ))}
    </OrdersContainer>
  </>
);

export default Orders;
