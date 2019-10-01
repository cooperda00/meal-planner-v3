//Modules
import React from "react";
import styled from "styled-components";

const UpdatesBar = ({ className }) => {
  return (
    <aside className={className}>
      <p>I am the live updates</p>
    </aside>
  );
};

export default styled(UpdatesBar)`
  width: 100%;
  height: 100%;
  border: 2px dotted blue;
`;
