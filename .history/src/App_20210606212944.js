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
import buttoncard1 from "./assests/buttoncard1.png";
import song1 from "./assests/song1.png";




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
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAAB4CAMAAACTvloEAAACoFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////8/Pz7+/v+/v7u7u7z8/PHx8fv7+/Z2dmRkZHX19ehoaHy8vLe3t75+fmEhISioqLPz8+fn59XV1cAAAD////h4eG8vLyJiYlHR0fp6enPz8/4+PjFxcWYmJjw8PCysrLY2Nh4eHilpaVi/9JiYmJN1chEu8FHw8NLzcVS3spM0cZQ2clU4cpX6Mxd9M9V5MtKycVCt8BBsr9Y7M3+vnNFv8LTP2Jf+dFIx8M9q708prxa8M45m7o/r77B9qP+xHPYQFn9nnVR3Mo6obuR4ayf5qit7aa08KX+uXP+r3TO/KL9q3QHBwel6qa68qP+tHN/2a+I3a27PIPCPH3+onXPPmqyOpPHPXbLPXDdQFH6yHVAQEB21LL+pnUPEg9o9c1k6cs2lrg1kLdFrrbH+KH8mHYaDQxlybY8mLE4jrCrOZ5Bo7OZ5q22O4ooZXVQUFDgQkhn+tWHr7ddvLOhOak+nYIlW3Jc1MBKu7lu0LRRr7ChoaE1gno8ln/ns34scXQwMC44HCdc3cd01sdTzL+8+a+T2KqQPKitR4A3jH0ueHjxmnfyonbcsnDFRGVXGzAXKygcHxp459hv9Nd53dFOw7yKkbFuyLCGT6p/y6nb9qCXdpKoY3r5tXizQGfYRVArPzGCytF8ncR+xr+EcLOo77I5hKna5ZyeQJuRYJhnq5Tuwnval3WqilrjZVptJ1msOUcxDBsSAxGy5aSRxpfm35WQjpGDNZHiyo2fUYyfOol4oHp0LHi+Q3KWN3G7lmFhfl/ue11OclrgVk3KRkyHXEKDKzZkUTNSQSyOkZ9YloP4jm5NG1iOMlGVb1BBYU4zV01tVzaTq5mht4SPs4IgSmD2Y44qAAAAHXRSTlMCAAUJDRsWEiDx1MPiZ/z3iSX+OBm6gXI+MnZNL/tMz9oAAAz5SURBVHja7NrbbwxRHMDxVYpt3eoaD79zZueyuzO7WXcPCIK4q7qzTbzQJaHYNm1INNF2iXs9UFIPIi5FIiWhvLhE4sElEULi7l9xztk5zu6OsWbTWY2db+J2mBn7ye/MTIpvgFef5oEWD9TnZdef1DzKvmX1eZx9S+qz0SzzypONqe83nlUTKisrkJdNFZWVE6oGDuSouYK5nGNHDUNeeRs2aiw1tZL6cjyH+xEacThWdxy8bDpeFzs8AiH/8IGEVIhaQelmJzt9ZB145a1uJNn7VZw0UzHTc4wfYY/zLzuAkX/MIC5qBaXbHSF9J3j9ZTt1hIZbRH0Z84nQaPBy0GiExgwipEzUAlrl9zydi/onEtGyMgsoWahAOng5TEcVQ7JFfeIGir37p+N2YjR8CN/0WaBj/ch7vhfQAeQfy0RzQUehkeBVQCPRqMHmphegRHeYN6CFdQANG8xHNAO0Co0Ar4IagSYS0VzQCegweBXUYTSejygHJbaVKAZeBRVD48oHD+IjKkDtbqEbu7o2gpd9daiy3NzzArSsAl208dyfajnivaD+oeOoorycgpZxUB8BRQh+X9edxlTy3ufiDSkOY5KCddnhcUHIGwqBmWwomiJDn4RQeflg/pzPC/rjTmNjS/Ly+4tQjARMTNIkF0FxUIYA9BXoUHETzQt66M7uxiYiWqwhFTCRsOQKqPhZX4IOcQBKRJPt7Zffd0ExEjARFPkfQRt3E9FUsj2RuPIJ3MwKY6jkO1nHWFEDACHNfEvRgRZUQVJiqoHDqiyOC6jkT+tsIWrQ34sBWzYwxtFfjEGMFIx1IGeIqIaecREwT6pIMoTI8UbABVBSQ6o9QUTv3QJLLoJGwwCyQk0Cmg6gsQ+nhzGQ6K8kLUyEZFWT+XFRjS2EyYJuRCidJotlwzKh7AxZF+EnxQrBJmso5ALorl27GlqoaPzKa8ud1EXQAJJBNWS+/YMGkMI6olIhRQbJ/LSKZB4XQ8wcDAN4YV0sW0D5GTIuwpdkpMXSw9znoLtoDU3JRJxkHVKXQU0LMILEhT2qZJX6GeQ7KSynWRTzOAnzu68sTidQIrmg/AziIuKk2OB/BzdAFy9uqE/GabVXXu8ESy5teUVmn4ejKVEANQgBjQ5QzIQUoOyb8AqomKRlLltBlSw0SeFL9CCXQBsWp2tIJeK1tDNnLEPq2kMp+7NGMYAWAQgHQMeQB1RSmBnut6CrmlKJWlP05UWw5NJrk9iNbCyjDNIgw8o57La8Rv5E7rINaMZF3Afd35DmJDW1xGurWWce37I8nFx6sVexwAVVMnT25kTupFmg1oeSCSprmct2oOIixQFdZVZ/2QRtrj7znN9JXQKVJU2X6Y+KIfM3GghpmsxkNBV+BwpRSierSgwgSM1jipaxrNqBiosUA5RZLmKl2hln82rS40/uDCnWMEuPAUvWsYJVUyJMIBlQxALKX+wVfqikKNgImcuGYmBdtgEVFykS6CJefSpONHnPL4KXc9AmE3Mhrb6lNg26ifb4tfel54JAF5otWbKkPllNMFk1NTWPnneBl1NQrsmaU3+5mXOS1jx6CSWfY1ChSWtLNNeYmqzvt6DEcwrKLWmzSS3xHqbJ2rx586OXJf5PTs5Aj9ULzXRtLdU1HJO0dOnmb6X9H/KdgmZgTma1JZvXmJasPXePvtkHpZtT0GzNeaS29h6iyTmJ57lzvSegZHMKyjEZJ2vKpXgPs6StJ5579+4997Fkh9QpaCbmlHQLkrUdS5nm+vV3n1HPFSs6e99BaeYU1KJJSzZ3rGddfdbJPLdu3dH5oDSH1Bno2bb0Ps/AnDVr1tTT7T0dzPPJUcLJPDds6O59CyWYU1CBSSmpJu10oiPteY5orqCcG9at6+5+UYJD6hRUTCbFZE0ntcY7qGenOZ6Ec92WLWu7z38puS+YOAfNGs3ptEmk1uqOq/dNzx0bGOfatXPn3v9YaqIOQS/xrc41J5nNaF39rNPkND3nkrafL7WnvVNQy2gSS1br117Cmb59bjE9ly3bftQD/RPokUsMM1tz5YyVK1e2Hrz+8IMYT+q5jHhuL9pzCSGEobAwOfYfgjJMPpnUchrp5MHrF24+3GvxtH8ZjUhYowhqqBiggo6Hg4H+AHpajKbQnDnz5O1rF5Yvv/lwhbh9Us/zb8CmQMZHC+tFBRXhWD8AzdWcyTr19Mb85cu33Xy1Yx3lzLvdJZSVIRcTVKRF+gPoT3bunrdpIIwD+BfgK9zZd35/qdfCgEQHJkYmJBBQpmZiQEIiIYiJIWRoGaAIEEICgXgZihC0dEEgioRaQAj4Ovi5y+U5O3EsV7kGifyX0iuOk5+f8724KmAKS8l5JE//55M7x0B09+tJ4Qmct39UzphcWZmubdsxhdgHCOraED8UonzmoFo/B03IYr8DngB6YffXKen55m31Y+VIcKZEhNuUugfZ5RmRCTy4krMGvS41kXNxcbHVebJzdgB6ZfeEvHv+qH4SkonBiOPwpHmmsUOpEwP2pLYsskIaWhFHDB00gwEvjNMqULyuYQk08C0PBqxk2JNSvV95fMqgt64LTYUJOdp6+Xhn+ezZAeiVdyehPHukOi58kLHvjIXDgYpNaMNbsJeOA/WHRwSTQAlc2EwHjTyq4opzF66SaJ0+aAEzT+65tqyBXvmar+DJpHj4qYpJqZa0us2lGG8U1NKPqALF7xCUC09d1KGUJtpVzKYOelPThBxv9X+unS+A7n3rkUlJVE8rh8k5FGO2KEpW1WaLNpuxCCRGQF1RuRlJfIoctaDKzInU67LB5XSxDiwyfdBFwSkxIf2Ha2d00Gdb62RC8E1WDMFYg1ZFG/ewLRoFZeDJh2eymnR5bjE8ly//i/5igQlQnfPw8Qedj6fPnD+vQJ/tfa9datqlaRJnjGV4w9I++fi2QG/zR0BdNBP/TpoMSiocXk292UgdGhIToKiZp9V5ffoMgC4L0D0oz6agbPC9jSUg1ezxbb6Oko2AetoHT+CIKtCIVk6bsClT6AnITh/0RgssAROytJIPSAAqK/TYlizPRl0eQeEz8EKJVLcVRjgEVQK2Cp6qPLF3Kyb2LLIh8NNhkQeDr9wEKGouLa30c88h6J2tHi6NGgxKOmh5nl7fFpZAGS3FarD05L5HMcN3F8uL6RIToIeHnEvtBw8/Xh6ALt95WlueelEF+65QeWPEtlrQBpsjDtVDhm0ZieCkpkABU3kq0Kd/3pP66BP7fd5DS7eMqAwKXx1SFQQNLTvRW4ezAr1oVaNPQnh1I6AScyHPvc7rcwPQnafrdeVZXno6vAwalEf0YHxbpk3YE68MiuNOOVU/RL0Y+wOCiplTAKc0Bbogcz/3PHdOgE4oz/rNERz1neKc06lqcyk0JrBHXZrYqzr22MDb4k1A8QaTUASFk4ipgwnQaysLC0vS8/nrDQl6+sv6NmkWl0I8sX3nUQAtrIoiuSqqauMOxRRBVZ3ROD8kjaEjNAD14UJxuRGFoBkVsY2BDjxfbVwC0Mtrm3XlWb/B7LFGa3lu4Yq7DFr2DhqAZsLRsjwqUrz83ChoPiBtXBKgX9b39eCdWRqnzRvuNpFUHh4zUgaF4OTHC5p0eZKoAx1fA2Vyr8QkaPvew9VLAPqpvjxrH9KlnDTdD4UkLMGpFIKK8CgOxSGcNAGFAy1PnMpGUNxzMgQKni8edXPQT1CeMwgvjm8+MRuO+0xmQNv3O4+63dxz8yKZSWI/U70R91aNJFFjVWoQFAakbre78bk3i/JU21J2wFgU41LISBLqBkxO1wyCtp+/Wu12P2xukxnFoXo8TkwFF1aJQdD2g9xzFcpzVuEuxVgGPbmnnlwRU6A3VmBAWv3we5vMMjz1rRDX48bC4WGI42YGf8e+BZ6fe//bL30aA7179cUjKM95GoPOMwf9NzIHPQjQQ3T+B0T+tncHKwrDABCGoWk0WFmEXaVWzXvu2/lo29kis9nExiTgaf6L4vEjtbdM/ZXBCdBBuwANl1onQHXtesu16wlQDQO0DAMkQDVdUd2HHxOXWhuNq9SFcRUXXrsO0a7T/E9dmP9x4TDAckTngarvmyoNA1VX/oX+ATWaUKsIE2qTs+G4yhxAjUb+ysPIn3M2nP95HFHNUBaHGcrRWT7xAaj59P5+UwXdvb/wgBJ0ec+bXlO+RWHKd5o97b+RPx7RHmPTete/GMamL7+eyRnKRfSMOXSRvsKJOfQx8CQoPpaHvt9qsD8TB/snt3hGU76h6Ndh71W2/eGa9CQoRA1EN5vz6TjsvHrSbjieRmjOnPCM59Ap+iC1c06tZMkZDfbHoiBV64Ez9iQoRUEKU7UWNMFJT4LyO0nRVj0NPuQEIkEjUZACVa1kUEfPFChJYaoydeRMg1IUdSoTlOiZAOVPKh81Y1CRNnPGoGJtpSSoqkigb+sHkXGvNdHvtOIAAAAASUVORK5CYII="
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

      {/*       <===========================section5===========================>

 */}

      <div className="section5">
        <div className="emptysection5"></div>

        <div className="section5inside">
          <Row>
            <div className="col-md-6">
              <div className="empty"></div>

              <div>
                <div className="maincontent">
                  <div className="maincontentinside1">
                    <img className="imh1" src={buttoncard1} />
                  </div>
                  <div className="maincontentinside">
                    <img src=" data:image/png;base64,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" />
                  </div>
                </div>

                <div className="maincontent">
                  <div className="maincontentinside">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSU  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" />
                  </div>
                  <div className="maincontentinside">
                    {" "}
                    <img
                      className="imh"
                      src="data:image/png;base64,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"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="songplaylist">
                <div className="songplaylistitem">
                  <div className="songplaylistiteminner">
                    <div className=" songimage">
                      <img className="songimage1" src={song1} />
                    </div>

                    <div className="col songtext">
                      <div>
                        <div className=" col songtextheader">
                          If The World <br />
                          Was Ending
                        </div>
                        .
                        <div className=" songparagrah">
                          by JP Saxe, ft. Julia Michaels
                        </div>
                        <div className=" iconssongs">
                          <div className="col-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAMAAAD6fQULAAAAM1BMVEUAAACOjo6Ojo6NjY2Ojo6NjY2NjY2Ojo6NjY2NjY2Pj4+Ojo6Ojo6KioqNjY2UlJSOjo6GDC98AAAAEHRSTlMAPvj07NzVvbOdf3VhIx0TKDXzNwAAAEBJREFUCNdtj8cNACAMA+m9eP9pUV4OgvudFMW2Kcso4Ls2IFmaULc2hEET8tQG18RItK/x8v3CBKaz2b/1vegA0z4GU3ZHUEMAAAAASUVORK5CYII=" />
                          </div>
                          <div className="">1.8k</div>{" "}
                          <div className="col-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAM1BMVEUAAACPj4+NjY2NjY2NjY2Ojo6NjY2Pj4+Pj4+Ojo6Ojo6NjY2Pj4+Ojo6Ojo6Ojo6Ojo69xnNrAAAAEHRSTlMAEPBg0KBPPyDfgHAwsJBv1PrvaAAAAGhJREFUGNOt0EsOgCAMRdFS/h+V/a/WFjTVkjjyTl5yEkgA/siEEnlTOOJtpVMYjOfNbdjeZ3kOJj7TVZ7QakTC2nWEUZsDChVWWC9FA9z2wng9yD3MDhIVExUTFZM8/wnoPDZYM/DVCTxTCzt4nbRgAAAAAElFTkSuQmCC" />
                          </div>
                          <div className="col-1"> 24</div>{" "}
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>

                <div className="songplaylistitem">
                  <div className="songplaylistiteminner">
                    <div className=" songimage">
                      <img src={song1} />
                    </div>

                    <div className="col songtext">
                      <div>
                        <div className=" col songtextheader">
                          If The World <br />
                          Was Ending
                        </div>
                        .
                        <div className=" songparagrah">
                          by JP Saxe, ft. Julia Michaels
                        </div>
                        <div className=" iconssongs">
                          <div className="col-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAMAAAD6fQULAAAAM1BMVEUAAACOjo6Ojo6NjY2Ojo6NjY2NjY2Ojo6NjY2NjY2Pj4+Ojo6Ojo6KioqNjY2UlJSOjo6GDC98AAAAEHRSTlMAPvj07NzVvbOdf3VhIx0TKDXzNwAAAEBJREFUCNdtj8cNACAMA+m9eP9pUV4OgvudFMW2Kcso4Ls2IFmaULc2hEET8tQG18RItK/x8v3CBKaz2b/1vegA0z4GU3ZHUEMAAAAASUVORK5CYII=" />
                          </div>
                          <div className="">1.8k</div>{" "}
                          <div className="col-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAM1BMVEUAAACPj4+NjY2NjY2NjY2Ojo6NjY2Pj4+Pj4+Ojo6Ojo6NjY2Pj4+Ojo6Ojo6Ojo6Ojo69xnNrAAAAEHRSTlMAEPBg0KBPPyDfgHAwsJBv1PrvaAAAAGhJREFUGNOt0EsOgCAMRdFS/h+V/a/WFjTVkjjyTl5yEkgA/siEEnlTOOJtpVMYjOfNbdjeZ3kOJj7TVZ7QakTC2nWEUZsDChVWWC9FA9z2wng9yD3MDhIVExUTFZM8/wnoPDZYM/DVCTxTCzt4nbRgAAAAAElFTkSuQmCC" />
                          </div>
                          <div className="col-1"> 24</div>{" "}
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>

                <div className="songplaylistitem">
                  <div className="songplaylistiteminner">
                    <div className=" songimage">
                      <img src={song1} />
                    </div>

                    <div className="col songtext">
                      <div>
                        <div className=" col songtextheader">
                          If The World <br />
                          Was Ending
                        </div>
                        .
                        <div className=" songparagrah">
                          by JP Saxe, ft. Julia Michaels
                        </div>
                        <div className=" iconssongs">
                          <div className="col-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAMAAAD6fQULAAAAM1BMVEUAAACOjo6Ojo6NjY2Ojo6NjY2NjY2Ojo6NjY2NjY2Pj4+Ojo6Ojo6KioqNjY2UlJSOjo6GDC98AAAAEHRSTlMAPvj07NzVvbOdf3VhIx0TKDXzNwAAAEBJREFUCNdtj8cNACAMA+m9eP9pUV4OgvudFMW2Kcso4Ls2IFmaULc2hEET8tQG18RItK/x8v3CBKaz2b/1vegA0z4GU3ZHUEMAAAAASUVORK5CYII=" />
                          </div>
                          <div className="">1.8k</div>{" "}
                          <div className="col-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAM1BMVEUAAACPj4+NjY2NjY2NjY2Ojo6NjY2Pj4+Pj4+Ojo6Ojo6NjY2Pj4+Ojo6Ojo6Ojo6Ojo69xnNrAAAAEHRSTlMAEPBg0KBPPyDfgHAwsJBv1PrvaAAAAGhJREFUGNOt0EsOgCAMRdFS/h+V/a/WFjTVkjjyTl5yEkgA/siEEnlTOOJtpVMYjOfNbdjeZ3kOJj7TVZ7QakTC2nWEUZsDChVWWC9FA9z2wng9yD3MDhIVExUTFZM8/wnoPDZYM/DVCTxTCzt4nbRgAAAAAElFTkSuQmCC" />
                          </div>
                          <div className="col-1"> 24</div>{" "}
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>

                <div className="songplaylistitem">
                  <div className="songplaylistiteminner">
                    <div className=" songimage">
                      <img src={song1} />
                    </div>

                    <div className="col songtext">
                      <div>
                        <div className=" col songtextheader">
                          If The World <br />
                          Was Ending
                        </div>
                        .
                        <div className=" songparagrah">
                          by JP Saxe, ft. Julia Michaels
                        </div>
                        <div className=" iconssongs">
                          <div className="col-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAMAAAD6fQULAAAAM1BMVEUAAACOjo6Ojo6NjY2Ojo6NjY2NjY2Ojo6NjY2NjY2Pj4+Ojo6Ojo6KioqNjY2UlJSOjo6GDC98AAAAEHRSTlMAPvj07NzVvbOdf3VhIx0TKDXzNwAAAEBJREFUCNdtj8cNACAMA+m9eP9pUV4OgvudFMW2Kcso4Ls2IFmaULc2hEET8tQG18RItK/x8v3CBKaz2b/1vegA0z4GU3ZHUEMAAAAASUVORK5CYII=" />
                          </div>
                          <div className="">1.8k</div>{" "}
                          <div className="col-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAM1BMVEUAAACPj4+NjY2NjY2NjY2Ojo6NjY2Pj4+Pj4+Ojo6Ojo6NjY2Pj4+Ojo6Ojo6Ojo6Ojo69xnNrAAAAEHRSTlMAEPBg0KBPPyDfgHAwsJBv1PrvaAAAAGhJREFUGNOt0EsOgCAMRdFS/h+V/a/WFjTVkjjyTl5yEkgA/siEEnlTOOJtpVMYjOfNbdjeZ3kOJj7TVZ7QakTC2nWEUZsDChVWWC9FA9z2wng9yD3MDhIVExUTFZM8/wnoPDZYM/DVCTxTCzt4nbRgAAAAAElFTkSuQmCC" />
                          </div>
                          <div className="col-1"> 24</div>{" "}
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="songdbutton">
                <button className="songbuttonitem">see all playlists</button>
              </div>
            </div>
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
                      <h2 className="card-titleinner">New ways </h2>
                      <h2 className="card-titleinner">of singing</h2>
                    </CardTitle>
                    <CardText className="card-paragraph">
                      <h5 className="card-paragraphinner">
                        {" "}
                        Sing a duet, solo, or join{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        a group performance.{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        Create music with top artists,{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        Disney characters,{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner"> and new </h5>
                      <h5 className="card-paragraphinner"> friends </h5>
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
                      <h2 className="card-titleinner">All levels</h2>
                    </CardTitle>
                    <CardText className="card-paragraph">
                      <h5 className="card-paragraphinner">Practice and </h5>{" "}
                      <h5 className="card-paragraphinner"> improve your </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        singing. Express{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        yourself with{" "}
                      </h5>{" "}
                      <h5 className="card-paragraphinner">
                        {" "}
                        creative audio and{" "}
                      </h5>
                      <h5 className="card-paragraphinner"> visual filters. </h5>
                    </CardText>
                  </CardBody>
                  <div className="space"></div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="empty"></div>

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

      <footer>
        <div className="section6">
          <div className="section6inside">
            <div className="mxnxs">
              <div>
                <span className="mjk">CONTACT</span>
              </div>
            </div>

            <div className="dmc">
              <Row>
                <div className="col-5">
                  <div className="footerleftcontent">
                    <div className="footerlogo">
                      <img
                        className="footerlogoimg1"
                        src="data:image/png;base64,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"
                      />{" "}
                    </div>
                    <div className="footerlogo2">
                      <img
                        className="footerlogoimg2"
                        src="data:image/png;base64,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"
                      />
                      <div className="footerlogoimg2text">
                        {" "}
                        support@gusei.net
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1">ddsws</div>

                <div className="col-5">
                  <div
                    className=" footerrightcontent"
                    style={{ background: "red" }}
                  >
                    <div className="imagecontentfooter">
                      <div className="imagecontentinsidefooter">
                        <img
                          className="socialmediaimage "
                          src="data:image/png;base64,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"
                        />
                      </div>
                    </div>

                    <div className="imagecontentfooter">
                      <div className="imagecontentinsidefooter">
                        <img
                          className="socialmediaimage "
                          src="data:image/png;base64,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"
                        />
                      </div>
                    </div>
                    <div className="imagecontentfooter">
                      <div className="imagecontentinsidefooter">
                        <img
                          className="socialmediaimage "
                          src="data:image/png;base64,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"
                        />
                      </div>
                    </div>
                    <div className="imagecontentfooter">
                      <div className="imagecontentinsidefooter">
                        <img
                          className="socialmediaimage "
                          src="data:image/png;base64,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"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </div>

            <div>
              <Row>
                <div className="col-3">dd </div>
                <div className="col-2"> kk</div>
                <div className="col-2">ksd </div>
                <div className="col-2">so </div>
                <div className="col-3">osm </div>
              </Row>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
