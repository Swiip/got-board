import React from "react";

import Navbar from "../components/navbar";
import Suspense from "../components/suspense";
import Loader from "../components/loader";
import Lobby from "../components/lobby/lobby";

const LobbyPage = () => (
  <>
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Lobby />
    </Suspense>
  </>
);

export default LobbyPage;
