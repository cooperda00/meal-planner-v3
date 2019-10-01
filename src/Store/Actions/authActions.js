export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    //Mark that an attempt is being made, use isFetching to display a spinner
    dispatch({ type: "LOGIN_ATTEMPT", isFetching: true });

    //Initialise firebase services
    const firebase = getFirebase();

    //Sign in with given credentials from form
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)

      //Display success, add login details + date to feed
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS", isFetching: false });
      })

      //If error, use details to show user
      .catch(err => {
        dispatch({
          type: "LOGIN_ERROR",
          err,
          isFetching: false
        });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      //Add signout + date to feed
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })

      .catch(err => {
        dispatch({
          type: "SIGNOUT_ERROR",
          err
        });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "SIGNUP_ATTEMPT", isFetching: true });
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      //Create User In Auth Section
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)

      //Add the user to the database
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            username: newUser.username,
            email: newUser.email
          });
      })

      //Success or Failure
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS", isFetching: false });
      })

      .catch(err => {
        dispatch({
          type: "SIGNUP_ERROR",
          err,
          isFetching: false
        });
      });
  };
};
