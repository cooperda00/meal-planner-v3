//Modules
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//Styles
import { spacing, font } from "../../../Utilities";
//Constants
import { loggedOutLinks } from "../../../Constants/links";

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      {loggedOutLinks.map(({ name, path }, index) => {
        return (
          <Link to={path} key={index}>
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

export default styled(Nav)`
  a {
    ${font("SM")};
    transition: 0.2s;
  }

  a:not(:last-of-type) {
    margin-right: ${spacing.SM};
  }

  a:hover {
    color: dodgerblue;
  }
`;
