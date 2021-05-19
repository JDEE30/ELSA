import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// Main pages
import Banner from './Banner';
import Pets from './Pets';
import Animals from './Animals';

function App() {
  return (
    <div className="app">
      <Switch>
             <Route exact path="/" component={Banner} />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/animals" component={Animals} />
      </Switch>
    </div>
  );
}

export default App; 