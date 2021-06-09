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
        <div className="botttomcontent">
          <div className="row">
            <div
              className="col-2 botttomsectionleft"
              style={{ background: "red" }}
            >
              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img
                    className="socialmediaimage "
                    src="data:image/png;base64,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"
                  />
                </div>
              </div>

              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img
                    className="socialmediaimage "
                    src="data:image/png;base64,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"
                  />
                </div>
              </div>
              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img
                    className="socialmediaimage "
                    src="data:image/png;base64,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"
                  />
                </div>
              </div>
              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img
                    className="socialmediaimage "
                    src="data:image/png;base64,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"
                  />
                </div>
              </div>
            </div>
            {/* <=========================================================== col-10>
             */}
            <div
              className="col-9 botttomsectionright"
              style={{ background: "green" }}
            >
              <div>
                {" "}
                <div className="contentright">
                  <div className="contentrightinner">
                    <img
                      className="imageandroid"
                      src="data:image/png;base64,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"
                    />
                  </div>
                </div>
                <div className="contentright">
                  <div className="contentrightinner">
                    <img
                      className="imageandroid"
                      src="data:image/png;base64,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"
                    />
                  </div>
                </div>
                <div className="contentright">
                  <div className="contentrightinner">
                    <div className="contentparagraph">
                      <div className="col-1 uploadvideo ">
                        <img
                          className="uploadvideoimage"
                          src="data:image/png;base64,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"
                        />
                      </div>

                      <div className="col-11">
                        <div>
                          <h1 className="textcontentheader">We DISCOVER</h1>
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
                </div>
              </div>
            </div>
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
                          <img
                            src="data:image/png;base64,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"
                            className="appimageitem"
                          />
                        </Col>{" "}
                      </div>
                    </div>
                    <div className="AppDownloadcontent">
                      <div className="AppDownload">
                        <Col className="imageapp">
                          <img
                            src="data:image/png;base64,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"
                            className="appimageitem"
                          />
                        </Col>{" "}
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

      {/*       <===========================section5===========================>

 */}

      <div className="section5">
        <div>
          <Row>
            <div className="col-md-6">
              <div>
                <Row >
                  <div className="col-md-3">dsd</div>

                  <div className="col-md-3">vgh</div>
                </Row>
              </div>
            </div>

            <div className="col-md-6">sjsjsj</div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
