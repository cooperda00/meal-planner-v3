//Modules
import React from "react";
import styled from "styled-components";
//Styles
// import { flex, font, spacing, grays } from "../../Utilities";
// import { StyledButton } from "../../Elements";
import { Spinner } from "../../../Elements";
//Redux
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const PantryContainer = ({ pantry }) => {
  return (
    <Container>
      {pantry ? (
        pantry.map(item => {
          return (
            <div key={item.id}>
              <p>
                {item.name} , {item.price} per {item.unit}
              </p>
              <input type="checkbox" value={item.inStock} readOnly />
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    pantry: state.firestore.ordered.pantry
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: "pantry",
      where: [["userId", "==", props.uid]]
    }
  ])
)(PantryContainer);
