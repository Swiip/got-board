import React from "react";

import Navbar from "../components/navbar";
import Suspense from "../components/suspense";
import Board from "../components/board/board";
import Loader from "../components/loader";

const BoardPage = () => (
  <>
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Board />
    </Suspense>
  </>
);

export default BoardPage;
