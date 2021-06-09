import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

import "./App.css";
import { Col, Row } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import facebook from "./assests/facebook.png"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  CardDeck,
  Card,
  CardImg,
  CardText,
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="section1">
        <div className="navbarsection">
          <Navbar color="light" light expand="lg" className="transparent">
            <NavbarBrand href="/" className=" col-2 textheader">
              TATTO's WORLD
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar id="navbar">
                <NavItem>
                  <div>
                    <img src={facebook} />
                  </div>
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className="textfont"
                  >
                    HOME
                  </Link>
                </NavItem>
                <NavItem>
                  <div>
                    <img src={facebook} />
                  </div>

                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    WORK
                  </Link>
                </NavItem>

                <NavItem>
                  <div>
                    <img src={facebook} />
                  </div>

                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    ABOUT
                  </Link>
                </NavItem>
                <NavItem>
                  <div>
                    <img src={facebook} />
                  </div>

                  <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    STUDIOS
                  </Link>
                </NavItem>

                <div className="col-8 ss ">
                  <div>
                    {" "}
                    <input />
                  </div>
                  <div>
                    {" "}
                    <button> Upload</button>{" "}
                  </div>
                </div>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <div className="botttomsection">
          <Row>
            <div className="col-2">
              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img className="socialmediaimage " src={facebook} />
                </div>
              </div>
              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img className="socialmediaimage " src={facebook} />
                </div>
              </div>

              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img className="socialmediaimage " src={facebook} />
                </div>
              </div>

              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img className="socialmediaimage " src={facebook} />
                </div>
              </div>
            </div>

            <div className="col-7">
              <div className="AppDownloadcontent">
                <div className="AppDownload">
                  <Col className="imageapp">dddc</Col>{" "}
                  <Col className="imageapp">ddd</Col>
                  <div></div>
                </div>
              </div>

              <div className="AppDownloadcontent">
                <div className="AppDownload">
                  <Col className="imageapp">dddc</Col>{" "}
                  <Col className="imageapp">ddd</Col>
                  <div></div>
                </div>
              </div>
              <div className="empty"></div>

              <div className="contentparagraph">
                <div className="col-1  imageapp">
                  <div className="imagecontentinside">
                    <img className="socialmediaimage " src={facebook} />
                  </div>
                </div>
                <div className="col-11">
                  <div>
                    <h1 className="textcontentheader"> We DISCOVER</h1>
                  </div>
                  <div>
                    <h3 className="contentparagraphtext">
                      THE NEXT GENERATION OF MUSICSTARS AND{" "}
                    </h3>
                  </div>
                  <div>
                    <h3 className="contentparagraphtext">
                      {" "}
                      GIVE TALENT TH BEST SHOT AT STAR DOM
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">dkdkk</div>
          </Row>
        </div>
      </div>

      {/*   
{/* <==================== SECTION 2  =================>
 */}

      <div className="section3" id="section3">
        <Col md="12">
          <Row>
            <Col
              md="6"
              className="colheight"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Card
                className="tatosdescription"
                style={{ borderColor: "transparent" }}
              >
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      padding: 10,
                    }}
                  >
                    <h5
                      style={{
                        marginBottom: 26,
                        fontSize: 16,
                        color: " rgb(158, 143, 143)",
                      }}
                    >
                      WHAT IS TATTO'S WORLD ?
                    </h5>

                    <h1 className="descript">
                      Tattoo's World is the home of global tattoo culture
                    </h1>

                    <div className="descriptinside">
                      We facilitate your tattoo journey with individualized
                      inspiration and guidance finding the right artist for a
                      tattoo you love.
                    </div>

                    <strong style={{ color: "#504949" }}>
                      “Tattoodo helps you connect to the artist. Before you even
                      get to the shop you feel comfortable, you know where
                      you’re at, you know where you’re going, and you know what
                      you want to get.”
                    </strong>
                  </div>
                </Col>
              </Card>
            </Col>

            <Col md="6" className="colheight" style={{ padding: 40 }}>
              <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  paddingTop: 25,
                  height: 0,
                }}
              >
                {/* <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/${App}`}
        frameBorder="0"
      /> */}

                <iframe
                  className="youtubevideo"
                  src="https://www.youtube.com/embed/RFxjUNk3E4I"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}

export default App;
