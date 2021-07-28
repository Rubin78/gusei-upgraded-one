import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
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
  
import homeicon from "../assests/homeicon.png";
import music5 from "../assests/music5.png";
import aboutus2x from "../assests/aboutus2x.png";
import Group from "../assests/Group.png";
import upload1 from "../assests/upload1.png";

function Header(props) {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
              <Navbar color="light" light expand="lg" className="transparent">
          <NavbarBrand href="/" className=" textheader">
            <div className="wrapper">
              <img
                className="wrapper-inside"
                src="data:image/png;base64,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"
              />

              {/*               <img src={logogusei} class="image--cover" />

 */}
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar id="navbar">
              <NavItem active>
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

              <div className=" ss ">
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

                <div class="toogleicon">
                  <img
                    className="toogleiconitem"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA2CAMAAABN0h93AAAAVFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////8wXzyWAAAAG3RSTlMABQ4eOFnLrHoZNCYTLkGkSUvztpmLcGdRvl+maK0lAAAAyElEQVRIx+2WWw6CMBAAaWuF3T4RBJT739OGRJsaf7Y2hJDOASbZPibbHBOWxS8JJ/MlCgqtAQQJAK2DKLGAUAbxQgDRKAGbJ1oUWr9IEou3qKInaILFy3nqSEyz9Kh01HAwVnbDlchjaKUBzj4zCey7NYdbL96aZtO4NYu74MlQbaYGeHLEz7yhrGYsuXA5upaEc26024UXeX6lPkMk82cGS8lQnClbjNds7Zmtpky2WM3W6bPFWc1W3baOka26bdVsnWXb+o8XenpuIO8TmLgAAAAASUVORK5CYII="
                  />
                </div>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
    );
}

export default Header;