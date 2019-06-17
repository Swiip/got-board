import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import { darkGrayBg, lightGrayFont } from "../../style/colors";

export const Header = styled.header`
  height: 50px;
  background-color: ${darkGrayBg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HomeLinkStyled = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  }
`;

export const HomeLink = ({ children, ...props }) => (
  <HomeLinkStyled>
    <Link {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>{children}</a>
    </Link>
  </HomeLinkStyled>
);

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
