import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar"
import Saved from "./pages/Saved"
import Search from "./pages/Search"
import NotFound from "./pages/NotFound"

function App() {
  
    return (
      <Router>
        <div>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    );
  
}

export default App;
