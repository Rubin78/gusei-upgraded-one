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

      <div className="section2" id="section4">
        <div>
          <Col md="12" sm="12" xs="12" style={{ padding: 20 }}>
            <div className="section3header">
              <h1
                className="textdecoration"
                style={{
                  textShadowColor: "#000",
                  textShadowOffset: { width: 0.5, height: 0.5 },
                  textShadowRadius: 1,
                }}
              >
                The New Way to Get
              </h1>
              <h1
                className="textdecoration"
                style={{
                  textShadowColor: "#000",
                  textShadowOffset: { width: 0.5, height: 0.5 },
                  textShadowRadius: 1,
                }}
              >
                {" "}
                inspired and Book Tattoos
              </h1>
            </div>
          </Col>
        </div>

        <Col>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col
              xs="12"
              sm="12"
              md="3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="btm-lefttcontent">
                <div className="btm-contentitemleft">
                  <div className="btm-iteminnerleft">
                    <h5> Browse millions of tattoos and save your favorites</h5>
                  </div>

                  <div className="btm-iteminnerleft">
                    <h5>Connect with top artists and studios</h5>
                  </div>

                  <div className="btm-iteminnerleft">
                    <h5>Book your next tattoo</h5>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="12" sm="12" md="3" className="downloadappinside1">
              {/* <div style={{height:720,backgroundColor:'silver',borderRadius:30,width:320}}>
<div  style={{padding:20}}>
<img src="https://tattoodo-web.imgix.net/home/explore.jpg" alt="Explore" loading="lazy" className="ri" />
  </div>
          
          </div> */}

              <div className="bottom">
                <div className="bottomitem">
                  <div className="bottomiteminner">
                    <img
                      src="https://tattoodo-web.imgix.net/home/explore.jpg"
                      alt="Explore"
                      loading="lazy"
                      className="ri"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="12" md="3" className="downloadappinside">
              <div className="btm-rightcontent">
                <div className="btm-contentitem">
                  <div className="btm-iteminner">
                    <h5>Download the App</h5>
                  </div>

                  <div className="btm-iteminner">
                    <img
                      src="https://www.tattoodo.com/static/svgs/appstore.svg"
                      alt="ios"
                      loading="lazy"
                      class="_1SYXywH _3iuNLNv"
                    />
                  </div>

                  <div className="btm-iteminner">
                    <img
                      src="https://www.tattoodo.com/static/svgs/googleplay_transparent.svg"
                      alt="android"
                      loading="lazy"
                      class="googleplaystore"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}

export default App;
