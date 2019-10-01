//Modules
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Styled Components
import GlobalStyle from "./Global";
//Routes
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Pantry from "./Components/Pages/Pantry";
import Recipies from "./Components/Pages/Recipies";
import Planner from "./Components/Pages/Planner";

const App = () => {
  return (
    <Router>
      <GlobalStyle />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/pantry" component={Pantry} />
      <Route path="/recipies" component={Recipies} />
      <Route path="/planner" component={Planner} />
    </Router>
  );
};

export default App;
