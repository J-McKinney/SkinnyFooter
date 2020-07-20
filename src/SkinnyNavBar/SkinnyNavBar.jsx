import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SkinnyNavBar extends Component {
  componentDidMount() {
    console.log("Hello World");
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>Hello World</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SkinnyNavBar;
