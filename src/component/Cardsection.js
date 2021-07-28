import React from 'react';
import karaokemic from "../assests/karaokemic.png";
import girl from "../assests/girl.png";
import download from "../assests/download.png";

  
import {
    Collapse,
    Col,
    Row,
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

    CardBody,
    CardTitle,
  } from "reactstrap";

function Cardsection(props) {
    return (
        <div>
            
      <div className="section3">
        <div className="section3inside">
          <div className="cardssection">
            <Row>
              <Col md="4" className="cardsectioninside">
                <Card className="cards-collection">
                  <CardImg
                    src={karaokemic}
                    className="xmxbn"
                    top
                    width="100%"
                    alt="Card image cap"
                  />
                  <CardBody className="card-bodymain">
                    <div className="xdv">
                      <div className="dsx">
                        <CardTitle className="card-title">
                          <h2 className="card-titleinner">MILLIONS OF</h2>
                          <h2 className="card-titleinner">KAROKE SONGS</h2>
                        </CardTitle>
                        <CardText className="card-paragraph">
                          <h5 className="card-paragraphinner">
                            {" "}
                            Chose From more{" "}
                          </h5>{" "}
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
                          <h5 className="card-paragraphinner">
                            {" "}
                            across language
                          </h5>
                        </CardText>
                      </div>
                    </div>
                  </CardBody>
                  <div className="space"></div>
                </Card>
              </Col>

              <Col md="4" className="cardsectioninside">
                <Card className="cards-collection">
                  <CardImg
                    src={girl}
                    className="xmxbn"
                    top
                    width="100%"
                    alt="Card image cap"
                  />
                  <CardBody className="card-bodymain">
                    <div className="xdv">
                      <div className="dsx">
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
                      </div>
                    </div>
                  </CardBody>
                  <div className="space"></div>
                </Card>
              </Col>

              <Col md="4" className="cardsectioninside">
                <Card className="cards-collection">
                  <CardImg
                    src={download}
                    className="xmxbn"
                    top
                    width="100%"
                    alt="Card image cap"
                  />
                  <CardBody className="card-bodymain">
                    <div className="xdv">
                      <div className="dsx">
                        <CardTitle className="card-title">
                          {" "}
                          <h2 className="card-titleinner">All levels</h2>
                        </CardTitle>
                        <CardText className="card-paragraph">
                          <h5 className="card-paragraphinner">Practice and </h5>{" "}
                          <h5 className="card-paragraphinner">
                            {" "}
                            improve your{" "}
                          </h5>{" "}
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
                          <h5 className="card-paragraphinner">
                            {" "}
                            visual filters.{" "}
                          </h5>
                        </CardText>
                      </div>
                    </div>
                  </CardBody>
                  <div className="space"></div>
                </Card>
              </Col>

            </Row>
          </div>
        </div>
      </div>
      <div className="empty"></div>
        </div>
    );
}

export default Cardsection;