import { useEffect } from "react";
import { useRouter } from "next/router";

import { handleAuthentication } from "../logic/auth0/auth-service";

const Callback = () => {
  const { replace } = useRouter();

  useEffect(() => {
    handleAuthentication().then(() => {
      replace("/");
    });
  }, []);

  return "loading...";
};

export default Callback;
