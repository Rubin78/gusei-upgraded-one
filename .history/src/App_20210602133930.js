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
            {/* <=========================================================== col-10>
             */}
            <div
              className="col-7 botttomsectionright"
              style={{ background: "green" }}
            >
              <div className="contentright">
                <div className="contentrightinner">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVEAAAB4CAMAAAB8fDE
                  6AAAA51BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////8/Pzl5eXz8/P7+/vGxsa1tbXb29uKior
                  X19fk5OShoaH////29vb8/Pzy8vLl5eX4+Pje3t75+fm2trafn59XV1cAAAD///+JiYng4OBHR0f6+vq8
                  vLzq6upjY2PPz8/FxcXw8PB4eHixsbGlpaXY2NiYmJgODg4EBAQICAhAQECRkZEVFRUvLy9PT09fX1+3t7ehoaFqampZWVn19fU7Ozs1NTXb29snJycfHx/U1NR/f39xcXHm5uarq6uenp6MjIxLS0tGs7pnAAAAIXRSTlMBAAUJDRIWHCAZ8dP8/sT4+nA7OSMZ4GPkuo+DgXItTS8g39sOAAAKyklEQVR42uzb2VLbMBSA4ZTuCaEbdG9nzrEkb7LsbCSEhBYo27Tv/zyVFIxiuxRHmJSO/d8wyFiZfMiyGaD1oKnaGtE1iraaru1vbI1lxa6txrNi09Y1nBtNN3UNaus
                  PoNtftrY62HRdna2tL9sPH6aqecK8586nt9h0c28/7SjUomkrB/qujdidTUcT
                  aLquyWg66yK23z2UpgXSVgZ0u4P4YgRNNzd6gdj5emWaETWgb9q42XiWbW8T228eGdK8qLriEV/2oals/ZeIrwqkraUVirgLTau0i
                  /jmkTJVpAXR7XYDakHa/ipJNzYKonKggy+hadVeYudxlrRlNtHNZg9dvf4mvnqcXvcZ0Z02Nnd5
                  m/awvaNJ86Kf8AU02fQCP6bXvRGVvG+bJWrZHr5/crVIjeg2dqHJri6+lqR50S84gya7Zvh5sUiN
                  qMTdwik02TXFD8+fPEoXqREdwW3qH9PvUNNGuPX0yeOc6EYHf4B944PdcHMfatoEO0+fK9GNV
                  LQlRRHBusFIeAxr/PSFqEX1Iq1CdOATVAmwj3Ai84igK54Xwo1hD1bIQWojqjbSqkT7pxx1p2
                  CZkfFd5v6Xos+eP3lclejw7Bvq2OFtRVURd/+RqOvdRvRpdaK/jnBR2K9CFCKM6i06vsBFbD6
                  oRBSSAACoIMQLHIAeA5WPAlRhAK7nBwnhATXnOYH8aqEH4kQd8xc4CSEkNqJmVgXnuyThSQSL
                  IsIZIYTmDlBXneGvU3SP4yL3GKoRjTkA1e/CYZKRaQDBCcjUZy7jkogGjKbnxUwPcDkgtETIq
                  BlOUlEzqxblQn09Opk1mjtAPddXEzlrFJ3hovODQUWi6rILEpruAGECMi5QUfU8Cu6lkOdenu
                  dfqiQJpHFhho2omVW9SgiqkGREcweCcDHG1ic6PEcdOx1ChaLpyklCCaMQOA0UYOICuJwaAXW
                  eS9IdmJrpjFWUii7PCg5G6avlRc0Bmu7pPF6b6DHqus4AqhKNPeogNe/Si9Va0euEoq/HMqLm
                  XEXnBETG8sOqzKz6k6Jo9oCDHtGxcG2iFGXsxNyVqrgzZd97TABYBMAdEARuEHU9zUeqEqVrv
                  9f/QvbtZHc0BFVVT0/Z65OiH2vJBLw4K1q86lkMUBguXvUlReV0axcdT6d7x32QDcf9YWVP+A
                  ExuhC4idAPUBGnGdHCnSkloCws3Jkys5YTNa/l36HooD/xZ/vuxdlhf7A8dhEmSRjPJ8NbiVK
                  XCao+eglNn3OgxxjVNCyAP4lCrOxo4PkAoUL3PbY0HKSimVmLoo6E9mnuACE+gJ+EdyY6+DEV
                  HkMZ8/bPDscDOTSe+GJTjenR+GBsJcqITvhXz+IeCS4puJJUQtGfRcEJvPRU1/NI0rscTryEC
                  KpEC7MWRUFwTnr5AzGRU8f0rkT7B/scr2JH8dkvOp+ddHEp74IOoGZZi46dc8zW3SQcczEyH0
                  K9shUd7jIsFZ/XbJVaig4dhiU7qtmv/u1EB/PSoCys2S/x7EQPT7BsYtJc9UbUehM1idr9iZ+
                  V6KTsEmX7Y6hbVqKld9EjCrXLRnQosFzsZ+2ueTvR8TmWqp7/vGMj+h1LFtZwiVqJTrFkP6GG
                  2YjuYsl8qGE2ovtYsj2oYTaiLpZsBCvEUdaDSvNF4qGMBMKHa/qvRFdZow6qSKWeAS5FeqCjj
                  ozCVf+V6BzKR1AXQWVFDLP1zLfOgavug6i4g3t9hIuCuwNl9N6Knt7B82hQ+fMB0Yoi0ooiQQ
                  
                  
                  zg3ooeYOU/M/koEwwRQ6imCGWcLm2qzv0V/c2+uS2nDQMB9Aea175rrastWTZmgJa2aRt6y/
                  /v6cxqpDlFbUYlE465byEwBrhk5V3JZyPkAmv1iQPMUaTJszNcPJjxaYcQHc2vOSsMNtpAE5bdebSZMkMS6mEJyR9wp5si3EAToWaD13VOshQDR0Prfvy63oJmXz+SLJgLjtdps6NCvDwNjLac/A0LFk+qz8WVfF78A5OdCoauoYRFKb70ntPDeRityQHO8Yqd+3TM6M1OKLChV6QLJWjdYbRisfTCg+dKHRtWaPDBnLhm21ud989/ezjqVqBAyuFGVipQbmLjaZaAm7Q0JMwSSkcsUWNkg8ccrl/PJAlnMjeq6Vzo1wYQlhPJ02l91uNUbWTl25wu9aQAKpMTMMT2ipClHWPmYvyh1fHWHm6JjABI6qo0U8dZMPFp6xGR4e5WsVGtQkdlo/zLbvDps5R8dNH6Fp1zqiY5jc7ehNhaG6mI9TT9K+LGt3+gAt49XWV0ei0oUR1sVETmXe/zi5mInVtMxIC0qaNat9ehOG1i4rCpE/eMBwraZS8v4MLkNvl7p6z8BhUVJlm6SW8UT3rFSgueJFTkzBqQoUKroyPonG7HN963Bc1uvsMF/C40N3jGTU12OMK5ow28z9KevOJp2pOFTcZId5XnSpy2HvRk5QVRY0OPeRzv9CUNtHHpS5h8cn7F6k3KuY1nKRRtoMjFL0pPs69Mb7aYrqiRsmne8hmv17u7oF6dJBVyGioz6akUVrWKHkHucgP5OKdLP2HWV+fm/V6cZQ2f9b/faM7mp2i28XuHmPPV6Y2WZmS0xAnX35lwm1c/7z3jw5fOWSh1fICFKOv756swptbF3ZPVVTcaVGjmIemxK1kvhKhrdLqXIcv0x0+bhA5F5Nn6vg6arM6/CocHs8WYZ7B6PBWQgafdxlfL9W44adXrEKD5c4aV+3pJMn8zGH90iq0mpVP3Sri4rh5jv9s2MAyd+myhHIHr8jVlTslGhBmMiRQ6qaG4SgKG8UfhavyRslWZNxKts7o7mnq0lr705DndvMkEjqln5viFi34bXI3DxvFYVAXyFHMQ70ktD3kpKhNln/mT0vw9I6z6DXecQ4wEaUpVVh25wxTHIWNElYD2voubZT8/MKjxdHdHYcpi7fgh9qKdzHF6bRUSyHxrYggzHY8fCuCMW13tCVnEaylHHhn4687OG1cVDCKlrQaAGTtDyxvdP2mBo9sHr+p98Y299E+3lXg04qNvkiuMkqG3d5l5fd3bLsahmG9OrzdO6d6cyA3o8FoLqsPVgirHqaZu/tm9/vNxzW5GUVGcxhWqwE9tx513oxOjb4IbkZvRm9GR/4no/8kN6M3oy+dpNHXcCA3frV3NysKw1AYhrFJ01hRaBmhiviTtVsH9RK8/wuaHA4lhJPamsJs/N6N4PIhUjfNl33rcEJ0g4GBOTdjJ0Rxe/us29sTolgYmLUwkLh1+MddLyivq2sTN2MrLLXk9nCdjW9vJ9KiwJpQZrQmZOOFAT6k2/o73+mc3cPV5/7BFIkqrLJlxKtstoqXWnwkqrAcmBEtB1pbxWtC/SE9Yt3y835d3doq/HeKRBUWWDNA3Skc0SDKT3ulG6wEfxKvBHvQpVgO7A+ppiVrPPGnxUvWJwI1yXVLJj3S2jpMJ3nS2nobgQZR+uDfvS6b2rn163m7X9BQ99vztXaubiyDipXgmHS77xwar9ufvacEDaJEqoi0NO1ht1k5NNRqszu01rJnmVpbD6Rsasyy8lk0FGmSp2FPBg2ikpRMfRUayuuQpwQlUUGqNKGWBr2rJE6tAqgUJdJgSqpoOAIKnpHiQpIWitLoXYoqJCiLStNCobEK6cmigpRV0Vg91SIlGn+FJsacUhSm8z2lKFyzLaUoygmi/9cfjS7Yh5anFmoAAAAASUVORK5CYII=" />
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
