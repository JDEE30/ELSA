import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class RehomeDogs extends Component {
        render() {

            return (
<div> <div className="banner">
        
        <div class="bannermargin">
        <h1 className="font-effect-shadow-multiple">Awesome, Excellent Choice!</h1>

        <img src= "./assets/elsa1.jpg" width="250px" height="250px"  />
        
        <p className="font-effect-shadow-multiple">Let me just get some information from you.</p>

<p>what kind of Dog</p>
<p>what is rehoming fee?</p>
<p>what is your zipcode?</p>
<p>Can you upload some nice photos of your Dog?</p>



              <div></div>

   <div></div> 
        
        
              </div></div>
         </div>
      
      );
}
}

export default RehomeDogs; 