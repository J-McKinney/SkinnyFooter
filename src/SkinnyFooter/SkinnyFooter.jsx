import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SkinnyFooter.css";

class SkinnyFooter extends Component {
  state = {
    changeNavBar: false,
  };

  componentDidMount() {
    console.log(this.state.changeNavBar);
  }
  componentDidUpdate() {
    console.log(this.state.changeNavBar);
  }

  // changeNavBar = (x) => {
  //   x.classList.onToggle("change");
  // }

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ changeNavBar: !this.state.changeNavBar });
    console.log("Clicked Toggle Button");
  };

  render() {
    return (
      <>
        <Container className="skinnyFooter">
          <Row>
            <Col>
              <div className="container" onClick={this.toggleMenu}>
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
