import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";

import { getIdToken } from "../auth0/auth-service";

export default () => {
  if (!process.browser) {
    return {};
  }

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: getIdToken()
    }
  }));

  const httpLink = createHttpLink({ uri: "/api" });

  return new ApolloClient({
    connectToDevTools: true,
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache()
  });
};
