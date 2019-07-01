import React from "react";

const labelSize = [12, 5];
const castleSize = 7;
const fortSize = 4;
const crownSize = 4;
const barrelSize = 4;
const soldierSize = 4;
const knightSize = 5;
const shipSize = 5;

export const Borders = ({ ...props }) => {
  const dragOverHandler = event => {
    console.log("drag over", event);
  };
  const dropHandler = event => {
    console.log("drop", event);
  };
  return (
    <path
      fill="none"
      stroke="#333333A0"
      strokeWidth="0.5"
      strokeLinejoin="round"
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      {...props}
    />
  );
};

export const SeaBorders = ({ ...props }) => (
  <Borders stroke="#111133A0" {...props} />
);

export const Label = ({ x, y, children, ...props }) => (
  <>
    <image
      xlinkHref="/static/images/parchement.png"
      width={labelSize[0]}
      height={labelSize[1]}
      x={x - labelSize[0] / 2}
      y={y - labelSize[1] / 2}
    />
    <text
      x={x}
      y={Number(y) + 0.5}
      fontSize="1.2"
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
    xlinkHref="/static/images/castle.svg"
    width={castleSize}
    height={castleSize}
    x={x - castleSize / 2}
    y={y - castleSize / 2}
    {...props}
  />
);

export const Fort = ({ x, y, ...props }) => (
  <image
    xlinkHref="/static/images/fort.svg"
    width={fortSize}
    height={fortSize}
    x={x - fortSize / 2}
    y={y - fortSize / 2}
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

export const Soldier = ({ x, y, house, ...props }) => (
  <>
    <image
      xlinkHref={`/static/images/${house}.webp`}
      width={soldierSize * 0.8}
      height={soldierSize * 0.8}
      x={x}
      y={y - soldierSize / 2}
      {...props}
    />
    <image
      xlinkHref="/static/images/soldier.svg"
      width={soldierSize}
      height={soldierSize}
      x={x - soldierSize / 2}
      y={y - soldierSize / 2}
      {...props}
    />
  </>
);

export const Knight = ({ x, y, house, ...props }) => (
  <>
    <image
      xlinkHref={`/static/images/${house}.webp`}
      width={knightSize * 0.8}
      height={knightSize * 0.8}
      x={x}
      y={y - knightSize / 2}
      {...props}
    />
    <image
      xlinkHref="/static/images/knight.svg"
      width={knightSize}
      height={knightSize}
      x={x - knightSize / 2}
      y={y - knightSize / 2}
      {...props}
    />
  </>
);

export const Ship = ({ x, y, house, ...props }) => (
  <>
    <image
      xlinkHref={`/static/images/${house}.webp`}
      width={shipSize * 0.8}
      height={shipSize * 0.8}
      x={x}
      y={y - shipSize / 2}
      {...props}
    />
    <image
      xlinkHref="/static/images/ship.svg"
      width={shipSize}
      height={shipSize}
      x={x - shipSize / 2}
      y={y - shipSize / 2}
      {...props}
    />
  </>
);
