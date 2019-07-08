import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";

import { useDispatch } from "../../../logic/dispatcher";

const Container = styled.div`
  user-select: none;
  position: ${({ dragging }) => (dragging ? "fixed" : "static")};
  pointer-events: ${({ dragging }) => (dragging ? "none" : "auto")};
  left: ${({ position: [x] }) => `${x - 30}px`};
  top: ${({ position: [, y] }) => `${y - 30}px`};
`;

const Svg = styled.svg`
  height: 60px;
  width: 60px;
`;

const OrderContainer = ({ token, children }) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState([0, 0]);

  const dispatchDrop = useDispatch("DropOrderToken");

  const move = useCallback(event =>
    setPosition([event.clientX, event.clientY])
  );

  const stop = useCallback(event => {
    setDragging(false);

    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", stop);

    dispatchDrop({ token, position: [event.clientX, event.clientY] });
  });

  const start = event => {
    setDragging(true);
    setPosition([event.clientX, event.clientY]);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
  };

  return (
    <Container onMouseDown={start} dragging={dragging} position={position}>
      <Svg>{children}</Svg>
    </Container>
  );
};

export default OrderContainer;
