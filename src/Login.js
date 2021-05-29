import {React, useState, Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
  async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   
   export default function Login({ setToken }) {
     const [username, setUserName] = useState();
     const [password, setPassword] = useState();
   
     const handleSubmit = async e => {
       e.preventDefault();
       
       const token = await loginUser({
         username,
         password,
         
       });
       setToken(token);
     }
   
     return(

<div className="banner">
        
        <div class="bannermargin">
        <img src= "./assets/elsa1.jpg" width="250px" height="250px"  />
        <h1 className="font-effect-shadow-multiple">Register & Login</h1>
        
    <form onSubmit={handleSubmit}>
      <label>
        <p className="font-effect-shadow-multiple">Username</p>
        <input type="text" class="buttons" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p className="font-effect-shadow-multiple">Password</p>
        <input type="password" class="buttons" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button class="buttons" type="submit">Submit</button>
      </div>
    </form>

    
    </div> </div>
      
      );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
