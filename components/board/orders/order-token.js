import React from "react";

import { orderModifyer } from "../../../game/orders";

const OrderToken = ({ token, ...props }) => {
  const modifyer = orderModifyer(token);

  const preventDrag = event => {
    event.preventDefault();
    return false;
  };

  const { x, y } = token.position;

  return (
    <g>
      <circle r="3" fill="black" cx={x} cy={y} {...props} />
      <image
        x={x - 2}
        y={y - 2}
        width="4"
        height="4"
        href={`/static/images/${token.type}.svg`}
        draggable={false}
        onDragStart={preventDrag}
      />
      {!token.normal && (
        <image
          x={x}
          y={y - 2}
          width="2"
          height="2"
          href="/static/images/star.svg"
        />
      )}
      {modifyer !== undefined && (
        <>
          <circle r="1" fill="#444" cx={x + 1} cy={y + 1} {...props} />
          <text x={x + 0.1} y={y + 1.5} fill="white" fontSize="1.5">
            {`+${modifyer}`}
          </text>
        </>
      )}
    </g>
  );
};

export default OrderToken;
