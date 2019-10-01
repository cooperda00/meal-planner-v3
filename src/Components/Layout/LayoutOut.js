//Modules
import React from "react";
import styled from "styled-components";
//Components
import Header from "./Header/Header";
//Styles
import { maxContentWidth, spacing, flex } from "../../Utilities";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentContainer>
        <div className="page-container">{children}</div>
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled.main`
  margin: 0 auto;
  max-width: ${maxContentWidth};
  height: calc(100vh - 10vh);
  padding: ${spacing.S} 0;

  .page-container {
    ${flex("column", "center", "center")};
    height: 100%;
    border: 2px dotted blue;
  }
`;

export default Layout;
