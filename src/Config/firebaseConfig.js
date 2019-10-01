import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCr5V24wybubdC1DwMXi15xyjv-kpHoOes",
  authDomain: "meal-planner-v3.firebaseapp.com",
  databaseURL: "https://meal-planner-v3.firebaseio.com",
  projectId: "meal-planner-v3",
  storageBucket: "",
  messagingSenderId: "1096636115912",
  appId: "1:1096636115912:web:b7e794b8a1a79409f06efd"
};

firebase.initializeApp(config);

firebase.firestore();

export default firebase;
