import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";

import { orderModifyer } from "../../../game/game-facts";
import { useDispatch } from "../../../logic/dispatcher";

const Container = styled.div`
  user-select: none;
  position: ${({ dragging }) => (dragging ? "fixed" : "static")};
  left: ${({ position: [x] }) => `${x - 30}px`};
  top: ${({ position: [, y] }) => `${y - 30}px`};
`;

const ContainerSvg = styled.svg`
  height: 60px;
  width: 60px;
`;

const OrderToken = ({ token, cx, cy, ...props }) => {
  const modifyer = orderModifyer(token);

  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState([0, 0]);

  const dispatchDrop = useDispatch("DropOrderToken");

  const move = useCallback(event =>
    setPosition([event.clientX, event.clientY])
  );

  const stop = useCallback(() => {
    console.log("stop");
    setDragging(false);

    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", stop);

    dispatchDrop("youpi");
  });

  const start = event => {
    console.log("start");
    setDragging(true);
    setPosition([event.clientX, event.clientY]);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
  };

  const preventDrag = event => {
    event.preventDefault();
    return false;
  };

  return (
    <Container onMouseDown={start} dragging={dragging} position={position}>
      <ContainerSvg>
        <circle r="30" fill="black" cx={cx} cy={cy} {...props} />
        <image
          x={cx - 20}
          y={cy - 20}
          width="40"
          height="40"
          href={`/static/images/${token.type}.svg`}
          draggable={false}
          onDragStart={preventDrag}
        />
        {!token.normal && (
          <image
            x={cx + 2}
            y={cy - 22}
            width="20"
            height="20"
            href="/static/images/star.svg"
          />
        )}
        {modifyer !== undefined && (
          <>
            <circle r="10" fill="#444" cx={cx + 10} cy={cy + 10} {...props} />
            <text x={cx + 2} y={cy + 15} fill="white" fontSize="14">
              {`+${modifyer}`}
            </text>
          </>
        )}
      </ContainerSvg>
    </Container>
  );
};

export default OrderToken;
