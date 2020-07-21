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
    if (this.state.changeNavBar === false) {
      console.log("componentDidMount: Bottom Menu Closed");
    } else if (this.state.changeNavBar === true) {
      console.log("componentDidMount: Bottom Menu Opened");
    }
  }
  componentDidUpdate() {
    if (this.state.changeNavBar === false) {
      console.log("componentDidUpdate: Bottom Menu Closed");
    } else if (this.state.changeNavBar === true) {
      console.log("componentDidUpdate: Bottom Menu Opened");
    }
    // this.openBottomMenu();
  }

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ changeNavBar: !this.state.changeNavBar });
  };

  // openBottomMenu() {
  //   if (this.state.changeNavBar === true) {
  //     console.log("Bottom Menu Opened");
  //     this.displayBottomMenu();
  //   } else if (this.state.changeNavBar === false) {
  //     console.log("Bottom Menu Closed");
  //   }
  // }

  // displayBottomMenu() {
  //   console.log("Displaying Bottom Menu");
  // }

  render() {
    return (
      <>
        <div id="footerWrapper">
          <Container className="openedBottomMenu">
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>

          <Container className="closedSkinnyFooter">
            <Row>
              <Col>
                <div
                  id="menuIconContainer"
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
        </div>
      </>
    );
  }
}

export default SkinnyFooter;
