import React, { useState, useEffect } from "react";
import "../page1/Section1";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Card,
} from "reactstrap";
import { Link } from "react-scroll";

function Section1(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  /* useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []); */
  return (
   <div>
      <div
        className="section1"
        id="section1"
        style={{
        }}
      >
        <Navbar
          data-aos="fade-right"
          color="red"
          light
          expand="md"
          className="navbar"
        >
          <NavbarBrand href="/">
            <h4 className="textheader1">Amin Siddique</h4>
          </NavbarBrand>
          <NavbarToggler
            onClick={toggle}
            style={{ color: "white", backgroundColor: "#F5F5F5" }}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>

            <Link
              activeClass="active"
              to="container1"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="container2"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Work
            </Link>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Experience
            </Link>
            <Link
              activeClass="active"
              to="section6"
              spy={true}
              smooth={true}
              duration={1000}
              className="textheader"
            >
              Contact
            </Link>
          </Collapse>
        </Navbar>
        <div className="particle">
        
        </div>

        {/* <========= TEXT SART====================> */}

        <Col
          md="5"
          sm="12"
          style={{
            display: "flex",
            alignItems: "space-between",
            justifyContent: "center",
            paddingLeft: 50,
          }}
        >
          <div className="top-text">
            <div data-aos="fade-down-right" className="DesignInnovation">
              {/* <div style={{color:'#ffffff',fontSize:15,textAlign:"left",letterSpacing:'.1em',paddingLeft:60}}>HELLO,</div> */}
              CAD +<p style={{ paddingBottom: -20 }}></p>
              <Typed
                strings={["CAM DESIGNER"]}
                typeSpeed={40}
                color={"white"}
              />
              <br />
             {/*  <Typed
                strings={[
                  "SOLIDWORKS",
                  "CAMWorks",
                  "Unigraphics",
                  "CATIA",
                  "MasterCAM",
                  "I-deas ",
                ]}
                typeSpeed={40}
                backSpeed={50}
                color="red"
                attr="placeholder"
                loop
              >
                <input
                  type="text"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontSize: 18.5,
                    textAlign: "center",
                    borderColor: "transparent",
                  }}
                />
              </Typed> */}
            </div>
          </div>
        </Col>
      </div>
      </div>

  );
}

export default Section1;
