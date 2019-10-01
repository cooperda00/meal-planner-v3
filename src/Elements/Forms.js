import styled from "styled-components";
import { font, spacing, grays } from "../Utilities";

export const StyledForm = styled.section`
  background: ${grays[2]};
  padding: ${spacing.L};
  border-radius: 0.5rem;

  .form {
    .input-group {
      margin-bottom: ${spacing.M};

      label {
        ${font("M")};
        display: block;
      }

      input {
        ${font("M")};
      }
    }

    .error-message {
      ${font("S")};
      margin-top: ${spacing.S};
      color: darkred;
    }
  }
`;
