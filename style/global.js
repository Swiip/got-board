import React from "react";
import { css, Global as EmotionGlobal } from "@emotion/core";

import { lightGrayBg } from "./colors";

const styles = css`
  @font-face {
    font-family: trajan-pro-3;
    src: url("/static/fonts/trajan-pro-3.woff2") format("woff2");
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }

  @font-face {
    font-family: tungsten-b;
    src: url("/static/fonts/tungsten-b.woff2") format("woff2");
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }

  @font-face {
    font-family: gotham-narrow;
    src: url("/static/fonts/gotham-narrow.woff2") format("woff2");
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }

  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${lightGrayBg};
    font-family: gotham-narrow, "Arial Narrow";
  }

  body {
    margin: 0;
  }
`;

const Global = () => <EmotionGlobal styles={styles} />;

export default Global;
