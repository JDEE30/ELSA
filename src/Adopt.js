import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class Adopt extends Component {
        render() {

            return (
<div> <div className="banner">
        
        <div class="bannermargin">
        <h1 className="font-effect-shadow-multiple">Awesome, Excellent Choice!</h1>

        <img src= "./assets/elsa1.jpg" width="250px" height="250px"  />
        
              <p className="font-effect-shadow-multiple">What kind of pet are you looking for?</p>
              <div></div>
       
                  <Link to="/AdoptDogs">
     <button className="buttons">
          Dogs
     </button>
 </Link>


 <Link to="/AdoptCats">
     <button className="buttons">
          Cats
     </button>
 </Link>

   <div></div> 
        
        
              </div></div>
         </div>
      
      );
}
}

export default Adopt; 