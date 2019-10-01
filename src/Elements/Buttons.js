import styled from "styled-components";
import { grays, spacing, font } from "../Utilities";

export const StyledButton = styled.button`
  ${font("S")}
  border: none;
  border-radius: 0.5rem;
  background: ${grays[6]};
  padding: ${spacing.XS} ${spacing.S};
  color: white;
  cursor: pointer;
`;
