import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class GetStarted extends Component {
        render() {

            return (
<div><Link to = "/AreYouRehomingOrAdopting">
  <img className="borderdownarrow" src="./assets/dropshadowarrowwhite.svg"width="100px" height="60%" />
  </Link> <div className="banner">
        
        <div class="bannermargin">
        <h1 className="font-effect-shadow-multiple">Let's Get Started!</h1>

        <img src= "./assets/elsa1.jpg" width="250px" height="250px"  />
        
              <p className="font-effect-shadow-multiple">Hi My names Elsa! To get started just Click the down arrow on your left.</p>
              <div></div>
       
        

   <div></div> 
        
        
              </div></div>
         </div>
      
      );
}
}

export default GetStarted; 