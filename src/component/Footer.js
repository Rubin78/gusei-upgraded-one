import React, { useState, useEffect } from "react";
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
import { Modal, ModalBody, ModalDialog } from "react-bootstrap";


function Footer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [showmod1, setShowmod1] = useState(false);
    const [showmod2, setShowmod2] = useState(false);
    const [showmod3, setShowmod3] = useState(false);
    const [showmod4, setShowmod4] = useState(false);
    const [showmod5, setShowmod5] = useState(false);


    return (
        <footer>
            <div className="section6">
                <div className="section6inside">
                    <div className="footerheader">
                        <div>
                            <span className="footerheaderitem">CONTACT</span>
                        </div>
                    </div>{" "}
                    {/*<div className="footerempty"></div>
            <div className="mxnxs">
              <div>
                <span className="mjk">CONTACT</span>
              </div>
            </div>
*/}
                    <div className="dmc">
                        <Row>
                            <div className="col-md-3 footerlogo ">
                                {" "}
                                <div className="footerlogo">
                                    <img
                                        className="footerlogoimg1"
                                        src="data:image/png;base64,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"
                                    />{" "}
                                </div>
                            </div>

                            <div className="col-md-3 footerlogo">
                                {" "}
                                <div className="footerlogo2">
                                    <img
                                        className="footerlogoimg2"
                                        src="data:image/png;base64,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"
                                    />
                                    <div className="footerlogoimg2text"> support@gusei.net</div>
                                </div>
                            </div>
                            {/*                 <div className="col-md-1">sosoosos</div>
                 */}
                            <div className="col-md-6">
                                {" "}
                                <div
                                    className=" footerrightcontent"
                                /*                     style={{ background: "red" }}
                                 */
                                >
                                    <div className="imagecontentfooter">
                                        <a href="https://www.facebook.com/gusei.gusei.7" className="imagecontentinsidefooter">
                                            <img
                                                className="socialmediaimage "
                                                src="data:image/png;base64,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"
                                            />
                                        </a>
                                    </div>

                                    <div className="imagecontentfooter">
                                        <a href="https://www.instagram.com/gusei2022/" className="imagecontentinsidefooter">
                                            <img
                                                className="socialmediaimage "
                                                src="data:image/png;base64,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"
                                            />
                                        </a>
                                    </div>
                                    <div className="imagecontentfooter">
                                        <a href="https://twitter.com/gusei2022" className="imagecontentinsidefooter">
                                            <img
                                                className="socialmediaimage "
                                                src="data:image/png;base64,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"
                                            />
                                        </a>
                                    </div>
                                    <div className="imagecontentfooter">
                                        <a href="https://www.youtube.com/channel/UCBaZVzOM21EUaohHyneKnew" className="imagecontentinsidefooter">
                                            <img
                                                className="socialmediaimage "
                                                src="data:image/png;base64,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"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </Row>
                    </div>
                    <div>
                        <>
                            <Modal
                                show={showmod1}
                                onHide={() => setShowmod1(false)}
                                size="lg"

                                dialogClassName="modal-90w ssh"
                                data-backdrop="false"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered

                            >
                                  <div class="modal-content txtn">

                                <Modal.Header className="modalborder" closeButton>

                                </Modal.Header>
                                <Modal.Body>
                             
                                    <>  <embed src="http://portal.gusei.net/api/media/document/terms_condition/terms-and-conditions-template_120720212248349920.pdf#view=FitH&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0"
                                        frameBorder="0"
                                        width="100%"
                                        height="700px"
                                        allowtransparency="true"
                                        style={{ backgroundColor: "#ffffff" }}

                                    /></>
                                </Modal.Body>
</div>
                            </Modal>



                            <Modal
                                show={showmod2}
                                onHide={() => setShowmod2(false)}
                                size="lg"

                                dialogClassName="modal-90w"
                                data-backdrop="false"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered

                            >
                                                                  <div class="modal-content txtn">

                                <Modal.Header className="modalborder" closeButton>

                                </Modal.Header>
                                <Modal.Body>

                                    <>  <embed src="http://portal.gusei.net/api/media/document/privacy/certificate_100720211237589505.pdf#view=FitH&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0"
                                        frameBorder="0"
                                        width="100%"
                                        height="700px"

                                    /></>
                                </Modal.Body>
</div>
                            </Modal>





                            <Modal
                                show={showmod3}
                                onHide={() => setShowmod3(false)}
                                size="lg"

                                dialogClassName="modal-90w"
                                data-backdrop="false"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered

                            >
                                                                  <div class="modal-content txtn">

                                <Modal.Header className="modalborder" closeButton>

                                </Modal.Header>
                                <Modal.Body>

                                    <>  <embed src="http://portal.gusei.net/api/media/document/cookies/Consutant-wise-collction-report_100720211939421593.pdf#view=FitH&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0"
                                        frameBorder="0"
                                        width="100%"
                                        height="700px"

                                    /></>
                                </Modal.Body>
</div>
                            </Modal>




                            <Modal
                                show={showmod4}
                                onHide={() => setShowmod4(false)}
                                size="lg"

                                dialogClassName="modal-90w"
                                data-backdrop="false"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered

                            >                                  <div class="modal-content txtn">

                                <Modal.Header className="modalborder" closeButton>

                                </Modal.Header>
                                <Modal.Body>

                                    <>  <embed src="http://portal.gusei.net/api/media/document/copyright/certificate_1_100720211455216569.pdf#view=FitH&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0"
                                        frameBorder="0"
                                        width="100%"
                                        height="700px"

                                    /></>
                                </Modal.Body>
</div>
                            </Modal>



                            <Modal
                                show={showmod5}
                                onHide={() => setShowmod5(false)}
                                size="lg"

                                dialogClassName="modal-90w"
                                data-backdrop="false"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered

                            >                                  <div class="modal-content txtn">

                                <Modal.Header className="modalborder" closeButton>

                                </Modal.Header>
                                <Modal.Body>

                                    <><embed src="http://portal.gusei.net/api/media/document/acknowledgement/Resume_100720211459459530.pdf#view=FitH&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0"
                                        frameBorder="0"
                                        width="100%"

                                        height="700px"

                                    /></>
                                </Modal.Body>
</div>
                            </Modal>
                        </>

                        <Row className="">
                            <button
                                className="col-md-3 col-sm-6 col-xs-12 btn-footer"
                                onClick={() => setShowmod1(true)}
                            >
                                <div className=" footerbottom">Terms & Conditions</div>
                            </button>

                            <button
                                className="col-md-2 col-sm-6 col-xs-12 btn-footer"
                                onClick={() => setShowmod2(true)}
                            >
                                <div className=" footerbottom">Privacy</div>
                            </button>
                            <button
                                className="col-md-2 col-sm-6 col-xs-12 btn-footer"
                                onClick={() => setShowmod3(true)}
                            >
                                <div className=" footerbottom">Cookies</div>
                            </button>
                            <button
                                className="col-md-2 col-sm-6 col-xs-12 btn-footer"
                                onClick={() => setShowmod4(true)}
                            >
                                <div className=" footerbottom">Copyright </div>
                            </button>
                            <button
                                className="col-md-3 col-sm-6 col-xs-12 btn-footer"
                                onClick={() => setShowmod5(true)}
                            >
                                <div className="  footerbottom">Acknowledgments</div>
                            </button>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="col-12 copyright ">
                © 2021 Gusei Pvt. Ltd., Inc. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;