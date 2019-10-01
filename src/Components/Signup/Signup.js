//Modules
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
//Styles
import { StyledForm, StyledButton, Spinner } from "../../Elements";
//Redux
import { connect } from "react-redux";
import { signUp } from "../../Store/Actions/authActions";

const Signup = ({ signUp, authError, auth, isFetching }) => {
  //State
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();

    signUp(formData);

    //Clear form on submit
    setFormData({
      username: "",
      email: "",
      password: ""
    });
  };

  //Route Guard / Redirect On Login
  if (auth.uid) {
    return <Redirect to="/pantry" />;
  } else if (isFetching) {
    //Show spinner when performing request
    return <Spinner />;
  } else {
    return (
      <StyledForm>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={e => {
                setFormData({
                  username: e.target.value,
                  email: formData.email,
                  password: formData.password
                });
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => {
                setFormData({
                  username: formData.username,
                  email: e.target.value,
                  password: formData.password
                });
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={e => {
                setFormData({
                  username: formData.username,
                  email: formData.email,
                  password: e.target.value
                });
              }}
            />
          </div>

          <StyledButton>Submit</StyledButton>

          {/* Error Message: */}
          {authError && <p className="error-message">{authError}</p>}
        </form>
      </StyledForm>
    );
  }
};

//Show authError if there was a problem
//Once auth.uid is in store, redirect to pantry
//Use is fetching to show spinner
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    isFetching: state.auth.isFetching,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => {
      dispatch(signUp(newUser));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
