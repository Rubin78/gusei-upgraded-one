import React, { useState, useEffect } from "react";
import "../page1/Section1.css";
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
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
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
     {/*  <Navbar color="red" light expand="md" className="navbar">
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
      </Navbar> */}




      import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
 

    </div>
  );
}

export default Section1;
