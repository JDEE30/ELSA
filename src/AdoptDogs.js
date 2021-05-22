import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class AdoptDogs extends Component {
        render() {

            return (
<div><Link to = "/pets">
  <img className="borderdownarrow" src="./assets/dropshadowarrowwhite.svg"width="100px" height="60%" />
  </Link> <div className="banner">
        
        <div class="bannermargin">
        <h1 className="font-effect-shadow-multiple">That's Great!</h1>

        <img src= "./assets/elsa1.jpg" width="250px" height="250px"  />
        
              <p className="font-effect-shadow-multiple">You can see our selection of doggos near you below!</p>
              <div></div>
       
    

   <div></div> 
        
        
              </div></div>
         </div>
      
      );
}
}

export default AdoptDogs; 