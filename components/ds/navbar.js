import styled from "@emotion/styled";

import { darkGrayBg, lightGrayFont } from "../../style/colors";

export const Header = styled.header`
  height: 50px;
  background-color: ${darkGrayBg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 30px;
  width: 230px;
  margin-right: 10px;
`;

export const Item = styled.div`
  color: ${lightGrayFont};
  padding: 10px;
  display: flex;
  align-items: center;
`;
