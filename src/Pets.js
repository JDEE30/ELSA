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
    
    class Pets extends Component {
        render() {

            return (
<div id="pets">
  <div className="whitebg">
       <a href = "#animals">
  <img class="borderimage" src="./assets/downarrow.svg"width="100px" height="45%" />
  </a>

<Container>
  <Row>
    <Col><h1>Find pets in your area</h1></Col>
    <Col></Col>
  </Row>
  <Row>
    <Col><p>Elsa allows you to find pets in your area with or with out rehoming fees.</p>
</Col>
    <Col></Col>
<Col className="petCols"><img src="./assets/doggy.jpg"width="200px" height="200px"></img></Col>

  </Row>
  <Row>
    <Col></Col>
    <Col></Col>
  </Row>
</Container> 

</div>      </div>
      );
}
}

export default Pets; 