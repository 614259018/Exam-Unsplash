import React from "react";
import Search from "./components/Search";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Search} />
      <Route path="/Profile" component={Profile} />
    </Router>
  );
}

export default App;
