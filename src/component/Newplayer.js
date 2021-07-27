import React,{useState,useEffect} from "react";
import MiniPlayer  from "./MiniPlayer";

import {Modal,Button,} from "react-bootstrap"
/*   let newaudio = new Audio();
 // 

function MiniPlayer(props) {
    useEffect(()=>{
        console.log("calling useeffect" ,props.isplaying)
 newaudio.pause();
 newaudio = new Audio(props.src);

 if (!props.isplaying) {
   newaudio.pause();
 } else {
   newaudio.play();
 }
    },[props]) */
    
  /*         console.log(_audio.props.src); */
/*   if (!isplaying) {
    newaudio.play();
  } else {
    newaudio.pause();
  }
 */

   


/*   return <div>
      vhfhhh
      < audio src= {props.src} controls />
 
  <br /></div>;
}
 */


function Newplayer(props) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [isplaying, setIsplaying] = useState(false);

    let newaudio = new Audio()

const myhandler=()=>{
    

     /*    for(var i=0;i<songlist.length ; i++ ){
let _audio = songlist[i];

 newaudio = new Audio(_audio.props.src);
newaudio.pause()
console.log(_audio.props.src)
 if (!isplaying) {
   newaudio.play();
 } else{
     newaudio.pause();
 }
    } */
    setIsplaying(! isplaying)
}

 let songlist = []

 
  
  return (
    <>
      <div>
        <div className=" col-sm-12 songplaylist">
          <div className=" songplaylistitem">
            <div className="songbuttoncards">
                <button  className="modalbttn" onClick={myhandler}>
                  {isplaying ? "Pause" : "Play"}
                </button>
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
                {/* {props.songs &&
                  props.songs.map((song_item, i) => {
                    return (
                      <>
                        {" "}
                        <Miniplayer
                          src={"http://portal.gusei.net/api/" + song_item}
                        />
                      </>
                    );
                  })} */}
                {/* {"helleo"+ JSON.stringify(props.songs)}*/}
                {props.songs &&
                  props.songs.map((_song) => (
                    <MiniPlayer
                      isplaying={isplaying}
                      src={"http://portal.gusei.net/api/" + _song}
                    />



                    
                  ))}
 {/* <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </> */}


                {/* {props.songs && props.songs.length == 2 && (
                  <>
                    <Miniplayer
                      isplaying={isplaying}
                      src={"http://portal.gusei.net/api/" + props.songs[0]}
                    />
                    <Miniplayer
                      isplaying={isplaying}
                      src={"http://portal.gusei.net/api/" + props.songs[1]}
                    />
                  </>
                )} */}



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
        ;
        {/*     <button onClick={myhandler}>{isplaying ? "Pause" : "Play"}</button> */
        /*  {props.songs &&
     props.songs.map((song_item, i) => {
         return <> <Miniplayer src={"http://portal.gusei.net/api/" + song_item} />
          </>
        
     })
    }
  */}
        {/* 
      {props.songs && props.songs.length == 1 && (
        <Miniplayer
          isplaying={isplaying}
          src={"http://portal.gusei.net/api/" + props.songs[0]}
        />
      )}
      <img
        className="genreimagesong"
        style={{
          height: 130,
          width: 130,
          borderRadius: "50%",
          borderWidth: 1,
          borderColor: "#c4c4c4",
        }}
        src={`http://portal.gusei.net/api/${props.thumbnail_url}`}
      />
      <>{props.album}</>
      <>{props.name}</>
      <>{props.likes}</>

      {props.songs && props.songs.length == 2 && (
        <>
          <Miniplayer
            isplaying={isplaying}
            src={"http://portal.gusei.net/api/" + props.songs[0]}
          />
          <Miniplayer
            isplaying={isplaying}
            src={"http://portal.gusei.net/api/" + props.songs[1]}
          />
        </>
      )}
     */}
      </div>
    </>
  );
}





export default Newplayer;