import React from "react";
import gql from "graphql-tag";

import Suspense from "./suspense";
import { H1 } from "./ds/titles";
import { Header, HomeLink, Logo, Item } from "./ds/navbar";
import { LinkButton } from "./ds/buttons";

import useQuery from "../logic/apollo/use-query";
import { logout } from "../logic/auth0/auth-service";

const query = gql`
  query UserQuery {
    user {
      nick
    }
  }
`;

const UserProfile = () => {
  const {
    data: {
      user: { nick }
    }
  } = useQuery(query);

  return (
    <>
      {`Hi, ${nick}`}
      <LinkButton invert type="button" onClick={logout}>
        Logout
      </LinkButton>
    </>
  );
};

const Navbar = ({ children }) => (
  <Header>
    <Item>
      <HomeLink href="/">
        <Logo src="/static/images/logo.png" />
        <H1 invert>Online Board Game</H1>
      </HomeLink>
    </Item>
    {children}
    <Item>
      <Suspense fallback="Authenticating...">
        <UserProfile />
      </Suspense>
    </Item>
  </Header>
);

export default Navbar;
