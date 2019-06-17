import React from "react";

import Navbar from "../components/navbar";
import Main from "../components/ds/containers";
import Continue from "../components/games/continue";
import Create from "../components/games/create";
import Join from "../components/games/join";
import Suspense from "../components/suspense";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Suspense fallback="loading">
          <Continue />
          <Create />
          <Join />
        </Suspense>
      </Main>
    </>
  );
};

export default HomePage;
