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
  Container,
} from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import facebook from "./assests/facebook.png";
import mobiles from "./assests/mobiles.png";
import download from "./assests/download.png";
import karaokemic from "./assests/karaokemic.png";
import girl from "./assests/girl.png";
import apple from "./assests/apple.png";
import google from "./assests/google.png";
import aboutus from "./assests/aboutus.png";
import homeicon from "./assests/homeicon.png";
import music5 from "./assests/music5.png";
import aboutus2x from "./assests/aboutus2x.png";
import Group from "./assests/Group.png";
import upload1 from "./assests/upload1.png";
import logogusei from "./assests/logogusei.png";
import femalesinger from "./assests/femalesinger.png";

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
    <div className="main">
      <div className="overtext">
        <Navbar color="light" light expand="lg" className="transparent">
          <NavbarBrand href="/" className=" col-2 textheader">
            <div class="wrapper">
              <img src={logogusei} class="image--cover" />
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar id="navbar">
              <NavItem>
                <div className="nav-image">
                  <img src={homeicon} className="navicons" />
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
                <div className="nav-image">
                  <img src={music5} className="navicons" />
                </div>

                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="textfont"
                >
                  SONGS{" "}
                </Link>
              </NavItem>

              <NavItem>
                <div className="nav-image">
                  <img src={aboutus2x} className="navicons" />
                </div>

                <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="textfont"
                >
                  ABOUT US
                </Link>
              </NavItem>
              <NavItem>
                <div className="nav-image">
                  <img src={Group} className="navicons" />
                </div>

                <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="textfont"
                >
                  APP{" "}
                </Link>
              </NavItem>

              <div className="col-5 ss ">
                <div className="navinputtext">
                  <input
                    placeholder="GET ROCKSTAR"
                    className="inputtextfield"
                  />
                </div>
                <div>
                  <button className="navbutton">
                    <div className="navimg">
                      <img src={upload1} />
                    </div>
                    <div className="navtext">Upload</div>
                  </button>
                </div>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="bottomcontent">
          <div>
            <div className="col-2" style={{ background: "red" }}>xxx</div>
          </div>
        </div>
      </div>

      <div className="section1">
        <div class="slider">
          <div></div>
          <div class="imgs_slides">
            {/*                 <!-- Radio buttons start -->
             */}{" "}
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <input type="radio" name="radio-btn" id="radio5" />
            {/* 
                <!-- Radio buttons end -->
                <!-- Embedding  images start --> */}
            <div class="first slide">
              <img src={femalesinger} />
            </div>
            <div class="slide">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210105130614/img2.PNG" />
            </div>
            <div class="slide">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210105130615/img3.PNG" />
            </div>
            <div class="slide">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210105130616/img4.PNG" />
            </div>
            <div class="slide">
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210105130617/img5.PNG" />
            </div>
            {/*                 <!-- Embedding images end -->
             */}{" "}
          </div>
          {/*             <!-- Navigation start -->
           */}{" "}
          <div class="navigation">
            <label for="radio1" class="navigation-btn"></label>
            <label for="radio2" class="navigation-btn"></label>
            <label for="radio3" class="navigation-btn"></label>
            <label for="radio4" class="navigation-btn"></label>
            <label for="radio5" class="navigation-btn"></label>
          </div>
          {/*             <!-- Navigation end -->
           */}{" "}
        </div>
        {/* <div className="navbarsection">
          <Navbar color="light" light expand="lg" className="transparent">
            <NavbarBrand href="/" className=" col-2 textheader">
              logo{" "}
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
        </div> */}
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
                  <div className="butn">
                    <button className="butn-inside">
                      GET STARTED INSTANTLY
                    </button>
                  </div>
                  <div className="col-7">
                    <div className="AppDownloadcontent">
                      <div className="AppDownload">
                        <Col className="imageapp">
                          <img src={apple} className="appimageitem" />
                        </Col>{" "}
                        <Col className="imageapp">ddd</Col>
                        <div></div>
                      </div>
                    </div>

                    <div className="AppDownloadcontent">
                      <div className="AppDownload">
                        <Col className="imageapp">
                          <img src={google} className="appimageitem" />
                        </Col>{" "}
                        <Col className="imageapp">ddd</Col>
                        <div></div>
                      </div>
                    </div>
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
              <Col md="4" className="cardsectioninside">
                <Card className="cards-collection">
                  <CardImg
                    src={karaokemic}
                    top
                    width="100%"
                    alt="Card image cap"
                  />
                  <CardBody className="card-bodymain">
                    <CardTitle className="card-title">
                      <h2 className="card-titleinner">MILLIONS OF</h2>
                      <h2 className="card-titleinner">KAROKE SONGS</h2>
                    </CardTitle>

                    <CardText className="card-paragraph">
                      <h5 className="card-paragraphinner"> Chose From more </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        Than 10 Millions karaoke{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        songs in your{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        favourite generes,{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner"> across language</h5>
                    </CardText>
                  </CardBody>
                  <div className="space"></div>
                </Card>
              </Col>

              <Col md="4" className="cardsectioninside">
                <Card className="cards-collection">
                  <CardImg src={girl} top width="100%" alt="Card image cap" />
                  <CardBody className="card-bodymain">
                    <CardTitle className="card-title">
                      <h2 className="card-titleinner">MILLIONS OF</h2>
                      <h2 className="card-titleinner">KAROKE SONGS</h2>
                    </CardTitle>

                    <CardText className="card-paragraph">
                      <h5 className="card-paragraphinner"> Chose From more </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        Than 10 Millions karaoke{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        songs in your{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        favourite generes,{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner"> across language</h5>
                    </CardText>
                  </CardBody>
                  <div className="space"></div>
                </Card>
              </Col>

              <Col md="4" className="cardsectioninside">
                <Card className="cards-collection">
                  <CardImg
                    src={download}
                    top
                    width="100%"
                    alt="Card image cap"
                  />
                  <CardBody className="card-bodymain">
                    <CardTitle className="card-title">
                      <h2 className="card-titleinner">MILLIONS OF</h2>
                      <h2 className="card-titleinner">KAROKE SONGS</h2>
                    </CardTitle>

                    <CardText className="card-paragraph">
                      <h5 className="card-paragraphinner"> Chose From more </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        Than 10 Millions karaoke{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        songs in your{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        favourite generes,{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner"> across language</h5>
                    </CardText>
                  </CardBody>
                  <div className="space"></div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/*       <====================================section4===================================>



 */}

      <div
        className="section4"
        style={{
          backgroundImage: `url(${aboutus})`,
        }}
      >
        <div className="titleheader">
          <div className="titleheaderinner">ABOUT US</div>
        </div>

        <div className="subtitle">
          <div className="subtitleinner">
            <div>
              We are a technology-driven media company focused on music. We help
            </div>
            <div>undiscovered talent achieve the fame they deserve.</div>
          </div>
        </div>

        <div className="descriptioncard">
          <div className="descriptioncardinner">
            <div className="cardtitle">
              <div className="cardtitleinner">
                CONNECTING THE WORLD THROUGH MUSIC™
              </div>
            </div>
            <div className="descriptioncardtext">
              <div className="descriptioncardtextinner">
                Music is more than just listening — music also includes
                creating, sharing, discovering, participating and connecting.
                Music is the original social network, with the power to break
                down barriers, touch souls, and bring people from all over the
                world together.
              </div>
            </div>
            <div className="descriptioncardtext">
              <div className="descriptioncardtextinner">
                When we started in 2020, Gusei was just a company with a fun
                name and a big dream. We wanted to bring music back to its roots
                and empower anyone to join in. Today, we’re a vibrant, global
                community of music lovers where millions of people across the
                world come together each day to share their passion for music,
                make new friends, cheer each other on, and simply have fun.
              </div>
            </div>
            <div className="descriptioncardtext">
              <div className="descriptioncardtextinner">
                If you love music, wake up humming, play a mean air guitar,
                can’t stop singing in the shower, or dream of rocking out in a
                punk ukulele band, join us. Who knows, you might just find your
                harmonious doppelganger or melodic twin separated at birth.
                Anyone can do it. No previous experience required.
              </div>
            </div>

            <div className="descriptioncardtext">
              <div className="descriptioncardtextinner">
                Let’s music together.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
