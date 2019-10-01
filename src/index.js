//Modules
import React from "react";
import ReactDOM from "react-dom";
//Components
import App from "./App";
//Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Store/Reducers/rootReducer";
//Firebase
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./Config/firebaseConfig";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(
        thunk.withExtraArgument({
          getFirebase,
          getFirestore
        })
      ),
      reduxFirestore(firebaseConfig),
      reactReduxFirebase(firebaseConfig, {
        attachAuthIsReady: true,
        useFirestoreForProfile: true,
        userProfile: "users"
      })
    )
  )
);

//Wait for auth data before render
store.firebaseAuthIsReady.then(() => {
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  ReactDOM.render(app, document.getElementById("root"));
});
