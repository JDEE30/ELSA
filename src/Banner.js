import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class Banner extends Component {
        render() {

            return (
<div><a href = "#pets">
  <img className="borderdownarrow" src="./assets/dropshadowarrowwhite.svg"width="100px" height="60%" />
  </a> <div className="banner">
        
        <div class="bannermargin">
        
        <img src= "./assets/elsa1.jpg" width="250px" height="250px"  />
        
              <h1 className="font-effect-shadow-multiple">Elsa</h1>
              <p className="font-effect-shadow-multiple">The app for finding your next fur baby!</p>
              <div></div>
 
  
  
 
              
                  <button className="buttons">Login</button>
              <div></div> 
        
        
              </div></div>
         </div>
      
      );
}
}

export default Banner; 