//Modules
import React from "react";
import { Redirect } from "react-router-dom";
//Components
import Layout from "../Layout/Layout";
//Redux
import { connect } from "react-redux";

const Recipies = ({ auth: { uid } }) => {
  //Route Guard
  if (uid) {
    return (
      <Layout>
        <h1>Recipies</h1>
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

export default connect(mapStateToProps)(Recipies);
