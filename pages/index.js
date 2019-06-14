import React from "react";

import Navbar from "../components/navbar";
import Main from "../components/ds/containers";
import Continue from "../components/games/continue";
import Create from "../components/games/create";
import Join from "../components/games/join";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Continue />
        <Create />
        <Join />
      </Main>
    </>
  );
};

export default HomePage;
