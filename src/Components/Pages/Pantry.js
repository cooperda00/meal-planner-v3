//Modules
import React from "react";
import { Redirect } from "react-router-dom";
//Components
import Layout from "../Layout/Layout";
import PantryContainer from "../Pantry/PantryContainer/PantryContainer";
//Redux
import { connect } from "react-redux";

const Pantry = ({ auth: { uid } }) => {
  //Route Guard
  if (uid) {
    return (
      <Layout>
        <PantryContainer />
      </Layout>
    );
  } else {
    return <Redirect to="/" />;
  }
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Pantry);
