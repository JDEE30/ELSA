import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class AreYouBuyingOrSelling extends Component {
        render() {

            return (
<div> <div className="banner">
        
        <div class="bannermargin">
        <h1 className="font-effect-shadow-multiple">Are you a adopting a new pet(s) or rehoming current pet(s)</h1>

        <img src= "./assets/elsa1.jpg" width="250px" height="250px"  />
        
              <p className="font-effect-shadow-multiple">Are you planning to Rehome your Pet or Adopt a new one?</p>
              <div></div>
       
                  <Link to="/Adopt">
     <button className="buttons">
          Adopt
     </button>
 </Link>


 <Link to="/Rehome">
     <button className="buttons">
          Rehome
     </button>
 </Link>

   <div></div> 
        
        
              </div></div>
         </div>
      
      );
}
}

export default AreYouBuyingOrSelling; 