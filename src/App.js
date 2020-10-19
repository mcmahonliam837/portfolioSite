import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Firebase, { FirebaseContext } from "./FirebaseContext";
import Agenda from "./Private/Agenda";
import Login from "./Private/Login";
import Dashboard from "Private/Dashboard";
import DegreeProgress from "Private/DegreeProgress";

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <Switch>
          <Route path="/agenda">
            <Agenda />
          </Route>
          <Route path="/degree-progress">
            <DegreeProgress />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
