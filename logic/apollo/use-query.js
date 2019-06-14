import { useQuery as originalUseQuery } from "react-apollo-hooks";
import { getIdToken } from "../auth0/auth-service";

export default (...args) => {
  if (!process.browser) {
    throw new Error("Intentionally prevents all GraphQL requests in SSR");
  }
  if (!getIdToken()) {
    throw new Promise(() => {});
  }
  return originalUseQuery(...args, { suspend: true }).data;
};
