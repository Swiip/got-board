import styled from "@emotion/styled";

import {
  fontColor,
  darkGrayBg,
  lightGrayFont,
  mediumGrayBg
} from "../../style/colors";

export const LinkButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${fontColor};
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: ${darkGrayBg};
  border-radius: 0;
  color: ${lightGrayFont};
  border: none;
  font-family: tungsten;
  font-size: 20px;
  padding: 5px 20px;
  cursor: pointer;
  min-width: 100px;

  :hover {
    background-color: ${mediumGrayBg};
  }
`;
