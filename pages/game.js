import React from "react";

import Navbar from "../components/navbar";
import Suspense from "../components/suspense";
import GameContent from "../components/game";

const Game = () => (
  <>
    <Navbar />
    <Suspense fallback="loading...">
      <GameContent />
    </Suspense>
  </>
);

export default Game;
