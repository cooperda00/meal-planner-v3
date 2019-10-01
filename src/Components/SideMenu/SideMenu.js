//Modules
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Routes
import { Route } from "react-router-dom";
//Constants
import { loggedInLinks } from "../../Constants/links";
//Styles
import { flex, font, spacing, grays } from "../../Utilities";
import { StyledButton } from "../../Elements";
//Redux
import { connect } from "react-redux";
import { signOut } from "../../Store/Actions/authActions";
//Icons
import { FaCogs } from "react-icons/fa";
//Components
import PantryMenu from "./PantryMenu/PantryMenu";

const SideMenu = ({ signOut }) => {
  return (
    <StyledSideMenu>
      <div className="links-container">
        {loggedInLinks.map(({ name, path, icon }, index) => {
          return (
            <Link to={path} key={index}>
              {icon}
              <p>{name}</p>
            </Link>
          );
        })}
      </div>

      <Route path="/pantry" component={PantryMenu} />

      <div className="controls">
        <StyledButton onClick={signOut}>Signout</StyledButton>
        <FaCogs />
      </div>
    </StyledSideMenu>
  );
};

const StyledSideMenu = styled.aside`
  ${flex("column", "flex-start", "flex-start")};
  width: 100%;
  height: 100%;
  border: 2px dotted blue;

  .links-container {
    ${flex("column", "flex-start", "flex-start")};
    ${font("SM")};

    padding: ${spacing.S};
    border-bottom: 2px solid ${grays[2]};
    width: 100%;
    font-weight: 300;

    a {
      ${flex("row", "flex-start", "center")};
      margin-bottom: ${spacing.S};

      p {
        display: inline-block;
        margin-left: ${spacing.S};
      }
    }
  }

  .controls {
    ${flex("row", "space-around")};
    width: 100%;
    margin-top: auto;
    margin-bottom: ${spacing.M};

    svg {
      ${font("XL")};
      cursor: pointer;
    }
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(signOut());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SideMenu);
