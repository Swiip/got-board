import React from "react";

const Borders = ({ ...props }) => (
  <path
    fill="transparent"
    stroke="#333333A0"
    strokeWidth="0.5"
    strokeLinejoin="round"
    {...props}
  />
);

export default Borders;
