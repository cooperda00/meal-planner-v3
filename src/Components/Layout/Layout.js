//Modules
import React from "react";
import styled from "styled-components";
//Components
import Header from "./Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import UpdatesBar from "../UpdatesBar/UpdatesBar";
//Styles
import { maxContentWidth, spacing } from "../../Utilities";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentContainer>
        <SideMenu />

        <div className="page-container">{children}</div>

        <UpdatesBar />
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled.main`
  margin: 0 auto;
  max-width: ${maxContentWidth};
  height: calc(100vh - 10vh);
  padding: ${spacing.S} 0;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: ${spacing.M};

  .page-container {
    border: 2px dotted blue;
    overflow-y: scroll;
  }
`;

export default Layout;
