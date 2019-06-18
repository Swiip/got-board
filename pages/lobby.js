import React from "react";

import Navbar from "../components/navbar";
import Suspense from "../components/suspense";
import Loader from "../components/loader";

const LobbyPage = () => (
  <>
    <Navbar />
    <Suspense fallback={<Loader />}>lobby</Suspense>
  </>
);

export default LobbyPage;
