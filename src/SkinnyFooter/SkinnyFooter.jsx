import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SkinnyFooter.css";

class SkinnyFooter extends Component {
  componentDidMount() {
    console.log("Hello-World");
  }

  render() {
    return (
      <>
        <Container className="skinnyFooter">
          <Row>
            <Col>
              <ul>
                <li>
                  <h5>The World Of React 1</h5>
                </li>
                <li>
                  <h5>The World Of React 2</h5>
                </li>
                <li>
                  <h5>The World Of React 3</h5>
                </li>
                <li>
                  <h5>The World Of React 4</h5>
                </li>
              </ul>
            </Col>

            <Col>
              <ul>
                <li>
                  <h5>The World Of React 5</h5>
                </li>
                <li>
                  <h5>The World Of React 6</h5>
                </li>
                <li>
                  <h5>The World Of React 7</h5>
                </li>
                <li>
                  <h5>The World Of React 8</h5>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SkinnyFooter;
