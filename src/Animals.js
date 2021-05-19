import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*
import M from 'materialize-css';
import { HashLink } from 'react-router-hash-link';
class Nav extends Component {   */
    
    class Animals extends Component {
        render() {

            return (
<div id="animals">
  <div className="animals">
  <a href = "#pets">
  <img className="borderdownarrow" src="./assets/dropshadowarrowwhite.svg"width="100px" height="50%" />
  </a>
  <Container>
  <Row className="petRows">
    <Col></Col>
    <Col><h1>All kinds of pets up for rehoming in your area!</h1></Col>
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