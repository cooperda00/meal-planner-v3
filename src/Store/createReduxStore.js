import { createStore } from "redux";
import { reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

const initialState = {};

const fbConfig = {
  apiKey: "AIzaSyCr5V24wybubdC1DwMXi15xyjv-kpHoOes",
  authDomain: "meal-planner-v3.firebaseapp.com",
  databaseURL: "https://meal-planner-v3.firebaseio.com",
  projectId: "meal-planner-v3",
  storageBucket: "",
  messagingSenderId: "1096636115912",
  appId: "1:1096636115912:web:b7e794b8a1a79409f06efd"
};

const rrfConfig = { userProfile: "users" };

// Initialize firebase instance
firebase.initializeApp(fbConfig);

export default () => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      reactReduxFirebase(firebase, rrfConfig),
      reduxFirestore(firebase),
      applyMiddleware(
        thunk.withExtraArgument({
          getFirebase,
          getFirestore
        })
      )
    )
  );
};
