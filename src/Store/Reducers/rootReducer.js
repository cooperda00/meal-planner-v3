//Modules
import { combineReducers } from "redux";
//Reducers
import authReducer from "./authReducer";
import pantryReducer from "./pantryReducer";
//Firebase
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  pantry: pantryReducer
});
