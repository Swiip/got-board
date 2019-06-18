import React from "react";

import Navbar from "../components/navbar";
import { MainMenu } from "../components/ds/containers";
import Continue from "../components/games/continue";
import Create from "../components/games/create";
import Join from "../components/games/join";
import Suspense from "../components/suspense";
import Loader from "../components/loader";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <MainMenu>
          <Continue />
          <Create />
          <Join />
        </MainMenu>
      </Suspense>
    </>
  );
};

export default HomePage;
