import { css } from "styled-components";
import { fontSize } from "./Variables";

export const flex = (
  direction = "row",
  justify = "flex-start",
  align = "flex-start"
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `;
};

export const font = size => {
  switch (size) {
    case "XS":
      return css`
        font-size: ${fontSize.XS};
        line-height: 1.5;
      `;
    case "S":
      return css`
        font-size: ${fontSize.S};
        line-height: 1.5;
      `;
    case "SSM":
      return css`
        font-size: ${fontSize.SSM};
        line-height: 1.4;
      `;
    case "SM":
      return css`
        font-size: ${fontSize.SM};
        line-height: 1.4;
      `;
    case "M":
      return css`
        font-size: ${fontSize.M};
        line-height: 1.4;
      `;
    case "L":
      return css`
        font-size: ${fontSize.L};
        line-height: 1.2;
      `;
    case "XL":
      return css`
        font-size: ${fontSize.XL};
        line-height: 1.1;
      `;
    case "XXL":
      return css`
        font-size: ${fontSize.XXL};
        line-height: 1;
      `;
    case "G":
      return css`
        font-size: ${fontSize.G};
        line-height: 1;
      `;
    default:
      return css`
        font-size: ${fontSize.S};
        line-height: 1.5;
      `;
  }
};

export const thinTitle = () => css`
  font-weight: 300;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`;
