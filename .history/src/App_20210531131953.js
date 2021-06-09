import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

import "./App.css";
import {
  Col,
  Row,
  button,
  
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import facebook from "./assests/facebook.png"
import mobiles from "./assests/mobiles.png";

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
            <div className="col-3">dkdkk</div>``
          </Row>
        </div>
      </div>

      {/*   
{/* <==================== SECTION 2  =================>
 */}
      <div className="section2">
        <div className="section2inside">
          {" "}
          <Row>
            <Col md="6" style={{ backgroundColor: "GREEN" }}>
              <div className="mobleftcontent">
                <div className="mobleftcontentitem">
                  <img src={mobiles} className="imagemobile" />
                </div>
              </div>
            </Col>

            <Col
              md="6"
              style={{ backgroundColor: "blue" }}
              className="mobright"
            >
              <div className="mobrightcontent">
                <div className="mobrightitem">
                  <div className="p-text">
                    <div className="p-textitem">PRACTISE SINGING </div>
                    <div className="p-textitem">CREATIVE MUSIC </div>
                    <div className="p-textitem">MAKING FRIENDS </div>
                  </div>
                  <div>
                    <button>GET STARTED INSTANTLY</button>
                  </div>
                  <div>
                    <button>GET STARTED INSTANTLY</button>
                  </div>
                  <div>
                    <button>GET STARTED INSTANTLY</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/*       <========================================section3 ==============>

 */}

      <div className="section3">
        <div className="section3inside">
          <div className="cardssection">
            <Row>
              <Col md="4">

<Card>
{/* <CardImg
top
width="100%"
src="/assets/318x180.svg"
alt="Card image cap"
/>
<CardBody>
<CardTitle tag="h5">Card title</CardTitle>
<CardSubtitle tag="h6" className="mb-2 text-muted">
Card subtitle
</CardSubtitle>
<CardText>
Some quick example text to build on the card title and make up
the bulk of the card's content.
</CardText>
<Button>Button</Button>
</CardBody> */}
</Card>

              </Col>
              <Col md="4">sqawf</Col>
              <Col md="4">sqawf</Col>
            </Row>

            {/* <CardDeck>
            <Card>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            </CardDeck> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
