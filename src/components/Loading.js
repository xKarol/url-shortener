import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <>
      <StyledLoading />
    </>
  );
};

export default Loading;

const spin = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

const StyledLoading = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 0.25rem solid rgba(255, 255, 255, 0.2);
  border-top-color: rgb(255, 255, 255);
  animation: ${spin} 1s infinite linear;
`;
