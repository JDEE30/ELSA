import {React, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import "./App.css";

// Main pages
import Banner from './Banner';
import Pets from './Pets';
import Animals from './Animals';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Preferences from './Preferences';
import GetStarted from './GetStarted';
import AreYouRehomingOrAdopting from './AreYouRehomingOrAdopting';
import Adopt from './Adopt';
import Rehome from './Rehome';
import AdoptDogs from './AdoptDogs';
import AdoptCats from './AdoptCats';
import RehomeDogs from './RehomeDogs';
import RehomeCats from './RehomeCats';










function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="app">
      <Switch>
             <Route exact path="/" component={Banner} />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/animals" component={Animals} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Preferences" component={Preferences} />
        <Route exact path="/GetStarted" component={GetStarted} />
        <Route exact path="/AreYouRehomingOrAdopting" component={AreYouRehomingOrAdopting} />
        <Route exact path="/Adopt" component={Adopt} />
        <Route exact path="/Rehome" component={Rehome} />
        <Route exact path="/AdoptDogs" component={AdoptDogs} />
        <Route exact path="/AdoptCats" component={AdoptCats} />
        <Route exact path="/RehomeCats" component={RehomeCats} />
        <Route exact path="/RehomeDogs" component={RehomeDogs} />


        
      </Switch>
    </div>
  );
}
  
export default App; 