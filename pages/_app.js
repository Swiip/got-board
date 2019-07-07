import React, { useState, useEffect, useMemo } from "react";
import { Container } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "react-apollo-hooks";

import initApollo from "../logic/apollo/init-apollo";
import { silentAuth, login } from "../logic/auth0/auth-service";
import Global from "../style/global";
import { DispatcherProvider } from "../logic/dispatcher";

const MyApp = ({ Component, pageProps }) => {
  const apollo = useMemo(initApollo, []);

  const [, setIsAuthenticated] = useState(false);

  useEffect(() => {
    silentAuth().then(() => {
      setIsAuthenticated(true);
    }, login);
  }, []);

  return (
    <Container>
      <Head>
        <title>GoT Online Board Game</title>
      </Head>
      <Global />
      <ApolloProvider client={apollo}>
        <DispatcherProvider>
          <Component {...pageProps} />
        </DispatcherProvider>
      </ApolloProvider>
    </Container>
  );
};

export default MyApp;
