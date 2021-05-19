import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class Animals extends Component {
        render() {

            return (
<div id="animals">
  <div className="animals">
  <Link to = "/">
  <img className="borderdownarrow" src="./assets/dropshadowarrowwhite.svg"width="100px" height="50%" />
  </Link>
  <Container>
  <Row className="petRows">
    <Col></Col>
    <Col><h1>With Elsa, you can find all kinds of different pets.</h1></Col>
    <Col></Col>

  </Row>
  
  <Row>
 
    <Col className="petCols"><img src="./assets/bunny.jpg"width="150px" height="150px"></img></Col>
    <Col></Col>

    <Col className="petCols">  <img src="./assets/elsa1.png"width="150px" height="150px"></img>  </Col>
  </Row>


  <Row className="petRows">
      <Col className="petCols"><img src="./assets/kitty.jpg"width="150px" height="150px"></img></Col>
    <Col></Col>

    <Col className="petCols">  <img src="./assets/piggy.jpg"width="150px" height="150px"></img>  </Col>
  </Row>
</Container> 

</div>      </div>
      );
}
}

export default Animals; 