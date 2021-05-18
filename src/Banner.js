import React, { Component } from 'react';
import './App.css';

/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class Banner extends Component {
        render() {

            return (

      <div className="banner">

      <h1 className="font-effect-shadow-multiple">Elsa</h1>
      <p className="font-effect-shadow-multiple">The app for finding your next fur baby!</p>
      <div></div>
      <button className="buttons">Register</button>      <button className="buttons">Login</button>
      <div></div> <a href = "#Tired">
    <img src= "./down-arrow.svg" className="downArrow"  width="50px" height="50px" alt= 'icon' />
  </a>


      </div>
 
      );
}
}

export default Banner; 