//Modules
import React from "react";
import styled from "styled-components";
//Components
import Nav from "./Nav";
import Avatar from "./Avatar";
//Redux
import { connect } from "react-redux";
//Styles
import {
  flex,
  font,
  thinTitle,
  grays,
  maxContentWidth,
  spacing
} from "../../../Utilities";

const Header = ({ className, auth }) => {
  return (
    <StyledHeader className={className}>
      <div className="container">
        <h1 className="message">Message</h1>

        <div className="controls">
          {!auth.uid && <Nav />}
          {auth.uid && <Avatar />}
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  background: ${grays[2]};

  .container {
    ${flex("row", "space-between", "center")}
    height: 100%;
    margin: 0 auto;
    padding: 0 ${spacing.M};
    max-width: ${maxContentWidth};

    @media (min-width: 1200px) {
      padding: 0;
    }

    .message {
      ${font("L")};
      ${thinTitle()}
    }

    .controls {
      ${flex("row", "space-between", "center")};
      height: 100%;
    }
  }
`;

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Header);
