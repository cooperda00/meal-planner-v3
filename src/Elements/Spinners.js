import React from "react";
import styled from "styled-components";
import { font, grays, spacing, flex } from "../Utilities";

export const Spinner = () => {
  return (
    <StyledSpinnerContainer>
      <StyledSpinner />
    </StyledSpinnerContainer>
  );
};

const StyledSpinnerContainer = styled.div`
  ${flex("column", "center", "center")}
  position: relative;
  height: 100%;
  width: 100%;
`;

const StyledSpinner = styled.div`
  color: ${grays[6]};
  margin: 0 auto;
  position: relative;
  font-size: ${font("M")};
  transform: translateZ(0);
  animation-delay: -0.16s;

  &,
  &:before,
  &:after {
    background: ${grays[6]};
    animation: load1 1s infinite ease-in-out;
    width: ${spacing.S};
    height: 2em;
    position: absolute;

    content: "";
  }

  &:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.5em;
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 2em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 2em;
    }
  }
`;

export const Spinner2 = () => {
  return (
    <StyledSpinnerContainer>
      <StyledSpinner2>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </StyledSpinner2>
    </StyledSpinnerContainer>
  );
};

const StyledSpinner2 = styled.div`
  margin: auto 0;
  text-align: center;
  padding-right: ${spacing.S};

  div {
    width: 10px;
    height: 10px;
    background-color: ${grays[5]};
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    margin-right: 8px;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    animation-delay: -0.16s;
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;
