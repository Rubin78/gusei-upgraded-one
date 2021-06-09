import logo from './logo.svg';
import './App.css';

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
  Col,
  CardDeck,
  Card,
  CardImg,
  CardText,
} from "reactstrap";

function App() {
  return (
    <div>
      <div className="section1">

<div className="section1" id="section6">
        {/* < ==================== gradient black color filter      =========================/> */}

        <div className="transbox"></div>

        {/* < ==================== Video  section=========================/> */}

        <div>
          <video
            loop
            autoPlay="true"
            start={4.31}
            end={9.48}
            playsinline="true"
            className="videoplace"
          >
            <source src="https://www.tattoodo.com/static/videos/frontpage_hero.webm" />
          </video>
        </div>

        {/* < ==================== Header Section=========================/> */}

        <div>
          <Navbar color="light" light expand="md" className="transparent">
            <NavbarBrand href="/" className="textheader">
              TATTO's WORLD
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar id="navbar">
                {/*            
            <NavItem>
            <Link  activeClass="active" to="section6" spy={true} smooth={true} duration={1000} className="textfont">HOME</Link>
            </NavItem> */}

                <NavItem>
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
                <NavItem>
                  <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    CONTACT
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

      </div>
      </div>


    </div>
  );
}

export default App;
