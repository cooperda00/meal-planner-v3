import React from "react";
import styled from "styled-components";
import { font, flex } from "../Utilities";
import image from "../Images/hero_image.jpg";

export const Hero = () => {
  return (
    <StyledHero>
      <div>
        Welcome to Meal Planner. Please login or signup to use our exciting
        features!
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  ${flex("column", "center", "center")};
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${image});
  background-position: center;
  background-size: cover;

  div {
    text-align: center;
    max-width: 80rem;
    ${font("L")};
    color: white;
  }
`;
