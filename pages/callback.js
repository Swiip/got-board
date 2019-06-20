import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { handleAuthentication } from "../logic/auth0/auth-service";

import Navbar from "../components/navbar";
import Loader from "../components/loader";

const CallbackPage = () => {
  const { replace } = useRouter();

  useEffect(() => {
    handleAuthentication().then(() => {
      replace("/");
    });
  }, []);

  return (
    <>
      <Navbar />
      <Loader />
    </>
  );
};

export default CallbackPage;
