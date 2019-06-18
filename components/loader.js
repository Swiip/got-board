import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const LoaderContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const rotation = keyframes`
  from { 
    transform: rotate(0deg); 
  } to { 
    transform: rotate(360deg); 
  }
`;

const Spinner = styled.img`
  margin: 5px;
  animation: ${rotation} 1s infinite;
`;

const Loader = () => (
  <LoaderContainer>
    <img src="/static/images/loader-text.png" alt="loader" />
    <Spinner src="/static/images/loader-spinner.png" alt="loader" />
  </LoaderContainer>
);

export default Loader;
