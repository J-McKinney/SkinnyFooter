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
            <Col>
              <ul>
                <li>Hello World 1</li>
                <li>Hello World 2</li>
                <li>Hello World 3</li>
                <li>Hello World 4</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Hello World 5</li>
                <li>Hello World 6</li>
                <li>Hello World 7</li>
                <li>Hello World 8</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SkinnyFooter;
