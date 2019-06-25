import React from "react";
import styled from "@emotion/styled";

const Container = styled.div``;

const Metadata = ({ game }) => <Container>{`Title: ${game.title}`}</Container>;

export default Metadata;
