import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
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
          <Container className="closedSkinnyFooter">
            <Row>
              <Col>
                <Dropdown drop={"up"} key={"up"}>
                  <Dropdown.Toggle
                    className="dropDownButton"
                    variant="light"
                    id="dropdown-basic"
                  >
                    <div
                      id="menuIconContainer"
                      className={this.state.changeNavBar ? "change" : ""}
                      onClick={this.toggleMenu}
                    >
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                      <div className="bar3"></div>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      First Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default SkinnyFooter;
