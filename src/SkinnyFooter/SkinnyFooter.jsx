import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SkinnyFooter.css";

class SkinnyFooter extends Component {
  componentDidMount() {
    console.log("Hello World");
  }

  render() {
    return (
      <>
        <Container className="skinnyFooter">
          <Row>
            <Col>Hello World!!!</Col>
            <Col>Hello World!!!</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SkinnyFooter;
