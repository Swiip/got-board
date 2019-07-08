import React from "react";

import { orderModifyer } from "../../../game/game-facts";

const OrderToken = ({ token, cx, cy, ...props }) => {
  const modifyer = orderModifyer(token);

  const preventDrag = event => {
    event.preventDefault();
    return false;
  };

  return (
    <>
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
    </>
  );
};

export default OrderToken;
