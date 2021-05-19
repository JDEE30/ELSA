import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class Login extends Component {
        render() {

            return (

<div className="banner">
        
        <div class="bannermargin">
        
    <h1>Login</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div> </div>
      
      );
}
}


export default Login; 