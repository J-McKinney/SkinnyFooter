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
        <footer>
          <Container className="headerContainer">
            <Row className="headerRow">
              <Col className="headerCol">Hello World!!!</Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SkinnyFooter;
