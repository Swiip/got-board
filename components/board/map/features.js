import React from "react";

const labelSize = [10, 5];
const castleSize = 6;
const crownSize = 4;
const barrelSize = 4;

export const Borders = ({ ...props }) => (
  <path
    fill="none"
    stroke="#333333A0"
    strokeWidth="0.5"
    strokeLinejoin="round"
    {...props}
  />
);

export const Label = ({ x, y, children, ...props }) => (
  <>
    <image
      xlinkHref="/static/images/parchement.jpg"
      width={labelSize[0]}
      height={labelSize[1]}
      x={x - labelSize[0] / 2}
      y={y - labelSize[1] / 2}
    />
    <text
      x={x}
      y={Number(y) + 0.5}
      fontSize="1.5"
      textAnchor="middle"
      fill="black"
      {...props}
    >
      {children}
    </text>
  </>
);

export const Castle = ({ x, y, ...props }) => (
  <image
    xlinkHref="/static/images/fort.svg"
    width={castleSize}
    height={castleSize}
    x={x - castleSize / 2}
    y={y - castleSize / 2}
    {...props}
  />
);

export const Crown = ({ x, y, ...props }) => (
  <image
    xlinkHref="/static/images/crown.svg"
    width={crownSize}
    height={crownSize}
    x={x - crownSize / 2}
    y={y - crownSize / 2}
    {...props}
  />
);

export const Barrel = ({ x, y, ...props }) => (
  <image
    xlinkHref="/static/images/barrel.svg"
    width={barrelSize}
    height={barrelSize}
    x={x - barrelSize / 2}
    y={y - barrelSize / 2}
    {...props}
  />
);
