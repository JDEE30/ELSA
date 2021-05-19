import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// Main pages
import Banner from './Banner';
import Pets from './Pets';
import Animals from './Animals';
import Register from './Register';
import Login from './Login';


function App() {
  return (
    <div className="app">
      <Switch>
             <Route exact path="/" component={Banner} />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/animals" component={Animals} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App; 