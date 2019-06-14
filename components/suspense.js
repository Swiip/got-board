import React, { Suspense as OriginalSuspense } from "react";

const Suspense = props => {
  if (process.browser) {
    return <OriginalSuspense {...props} />;
  }
  return props.fallback;
};

export default Suspense;
