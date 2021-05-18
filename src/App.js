import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Banner from './Banner';
import Pets from './Pets';
import Animals from './Animals';

import 'bootstrap/dist/css/bootstrap.min.css';
/*
import M from 'materialize-css';
*/


/* This app is called Elsa, it is app to sell dogs and cats */


function App() {
  return (
<div>
<Banner />
<Pets />
<Animals />


</div>  


);
}



export default App;