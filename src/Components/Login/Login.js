//Modules
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
//Styles
import { StyledForm, StyledButton, Spinner } from "../../Elements";
//Redux
import { connect } from "react-redux";
import { signIn } from "../../Store/Actions/authActions";

const Login = ({ signIn, authError, auth, isFetching }) => {
  //State
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    signIn(formData);
    //Clear form
    setFormData({
      email: "",
      password: ""
    });
  };

  //Route Guard / Redirect On Login
  if (auth.uid) {
    return <Redirect to="/pantry" />;
  } else if (isFetching) {
    //Show spinner
    return <Spinner />;
  } else {
    return (
      <StyledForm>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => {
                setFormData({
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
    signIn: creds => {
      dispatch(signIn(creds));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
