import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SkinnyFooter.css";

class SkinnyFooter extends Component {
  state = {
    changeNavBar: false,
  };

  componentDidMount() {}
  componentDidUpdate() {}

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ changeNavBar: !this.state.changeNavBar });
  };

  render() {
    return (
      <>
        <Container className="skinnyFooter">
          <Row>
            <Col>
              <div
                id="container"
                className={this.state.changeNavBar ? "change" : ""}
                onClick={this.toggleMenu}
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SkinnyFooter;
