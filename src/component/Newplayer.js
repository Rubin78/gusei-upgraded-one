import React, { useState, useEffect } from "react";
import MiniPlayer from "./MiniPlayer";

import { Modal, Button, Row } from "react-bootstrap";
import songmodal1 from "../assests/songmodal1.png"
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
function Newplayer(props) {


  const [showmodal2, setShowmodal2] = useState(false);

  const handlemod2Close = () => { setShowmodal2(false); setIsplaying(false) }
  const handlemod2Show = () => setShowmodal2(true);




  const [show, setShow] = useState(false);

  const handleClose = () => { setShow(false); setIsplaying(false) }
  const handleShow = () => setShow(true);

  const [isplaying, setIsplaying] = useState(false);

  let newaudio = new Audio()

  const myhandler = () => {


    setIsplaying(!isplaying)
  }

  let songlist = []



  return (
    <>
      <div>
        <div className=" col-sm-12 songplaylist">
          <div className=" songplaylistitem">
            <div className="songbuttoncards">

              <div className="scx">

                <img
                  className="songimage1"
                  style={{
                    height: 170,
                    width: 170,
                    borderRadius: "50%",
                    borderWidth: 1,
                    borderColor: "#c4c4c4",
                  }}
                  srcSet={`http://portal.gusei.net/api/${props.thumbnail_url}`}
                />


                {props.songs &&
                  props.songs.map((_song) => (
                    <>  <MiniPlayer
                      isplaying={isplaying}
                      src={"http://portal.gusei.net/api/" + _song}
                    />






                    </>


                  ))}




                <>
                  <Button className="modalbttn" variant="primary" onClick={handleShow}>
                    play
                  </Button>


                  <Modal
                    size="lg"
                    show={show} onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"

                    animation={false}>
                    <Modal.Header className="modheader" closeButton>
       </Modal.Header>
                    <Modal.Body className="modalbodycontent">





                      <Row>
                        <div className="col-6"> <div className="scxmd">

                          <img
                            className="scxmdimage"
                            style={{
                              width: "100%",
                              borderWidth: 1,
                              borderColor: "#c4c4c4",
                            }}
                            src={songmodal1}
                          /></div></div>
                        <div className="col-6">

                          <div className="modtextmain">

                            <div className="modtextmaininside" >
                              <div className="iconheart"><FavoriteIcon style={{ color: "white", fontSize: 35 }} />

                              </div>
                              <div className="texthess">    ROCK'n' ROll NERD</div>
                              <div className=" songparagrahmodal"> TIM Minchin</div>
                            </div>
                          </div>

                          {/* 
<div className=" col-sm-7 col-xs-6 songdescriptionsn" style={{backgroundColor:"red"}}>
          <div className=" col-sm-11 col-xs-10 songtext">
            <div className="songtextinside">
              <div>
                <div className="texthes">    ROCK'n' ROll NERD</div>
              </div>

              <div className=" songparagrah"> TIM Minchin</div> */}

                          {/* <div className=" iconssongs">
                <div className="col-1">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAMAAAD6fQULAAAAM1BMVEUAAACOjo6Ojo6NjY2Ojo6NjY2NjY2Ojo6NjY2NjY2Pj4+Ojo6Ojo6KioqNjY2UlJSOjo6GDC98AAAAEHRSTlMAPvj07NzVvbOdf3VhIx0TKDXzNwAAAEBJREFUCNdtj8cNACAMA+m9eP9pUV4OgvudFMW2Kcso4Ls2IFmaULc2hEET8tQG18RItK/x8v3CBKaz2b/1vegA0z4GU3ZHUEMAAAAASUVORK5CYII=" />
                </div>
                <div className="">1.8k</div>{" "}
                <div className="col-1">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAM1BMVEUAAACPj4+NjY2NjY2NjY2Ojo6NjY2Pj4+Pj4+Ojo6Ojo6NjY2Pj4+Ojo6Ojo6Ojo6Ojo69xnNrAAAAEHRSTlMAEPBg0KBPPyDfgHAwsJBv1PrvaAAAAGhJREFUGNOt0EsOgCAMRdFS/h+V/a/WFjTVkjjyTl5yEkgA/siEEnlTOOJtpVMYjOfNbdjeZ3kOJj7TVZ7QakTC2nWEUZsDChVWWC9FA9z2wng9yD3MDhIVExUTFZM8/wnoPDZYM/DVCTxTCzt4nbRgAAAAAElFTkSuQmCC" />
                </div>
                <div className="col-1 likes">{props.likes}</div>{" "}
              </div>
            </div>
          </div>
        </div> */}
                        </div>

                      </Row>


                    </Modal.Body>
                    <Modal.Footer>

                      {props.songs &&
                        props.songs.map((_song) => (
                          <>  <MiniPlayer
                            isplaying={isplaying}
                            src={`${process.env.REACT_APP_BASE_URL}` + _song}
                          />


                          </>


                        ))}
                      <button className="modalplaybtn" onClick={myhandler}>{isplaying ? <PauseCircleOutlineOutlinedIcon style={{ fontSize: 65 }} /> : <PlayCircleFilledOutlinedIcon style={{ fontSize: 65 }} />}</button>
                      {/* 
          <Button variant="primary"  onClick={handleClose}>
            Save Changes
          </Button> */}
                    </Modal.Footer>
                  </Modal>




                  { /*       length = {props.songs && props.songs.length}
 */}
                </>


              </div>
              <div className=" col-sm-7 col-xs-6 songdescriptionsn">
                <div className=" col-sm-11 col-xs-10 songtext">
                  <div className="songtextinside">
                    <div>
                      <div className="texthes">{props.album}</div>
                    </div>

                    <div className=" songparagrah">{props.name}</div>

                    <div className=" iconssongs">
                      <div className="col-1">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAMAAAD6fQULAAAAM1BMVEUAAACOjo6Ojo6NjY2Ojo6NjY2NjY2Ojo6NjY2NjY2Pj4+Ojo6Ojo6KioqNjY2UlJSOjo6GDC98AAAAEHRSTlMAPvj07NzVvbOdf3VhIx0TKDXzNwAAAEBJREFUCNdtj8cNACAMA+m9eP9pUV4OgvudFMW2Kcso4Ls2IFmaULc2hEET8tQG18RItK/x8v3CBKaz2b/1vegA0z4GU3ZHUEMAAAAASUVORK5CYII=" />
                      </div>
                      <div className="">1.8k</div>{" "}
                      <div className="col-1">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAM1BMVEUAAACPj4+NjY2NjY2NjY2Ojo6NjY2Pj4+Pj4+Ojo6Ojo6NjY2Pj4+Ojo6Ojo6Ojo6Ojo69xnNrAAAAEHRSTlMAEPBg0KBPPyDfgHAwsJBv1PrvaAAAAGhJREFUGNOt0EsOgCAMRdFS/h+V/a/WFjTVkjjyTl5yEkgA/siEEnlTOOJtpVMYjOfNbdjeZ3kOJj7TVZ7QakTC2nWEUZsDChVWWC9FA9z2wng9yD3MDhIVExUTFZM8/wnoPDZYM/DVCTxTCzt4nbRgAAAAAElFTkSuQmCC" />
                      </div>
                      <div className="col-1 likes">{props.likes}</div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
        </div>

      </div>
    </>
  );
}





export default Newplayer;