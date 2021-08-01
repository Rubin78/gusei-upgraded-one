import { Media, Player, controls } from "react-media-player";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';

import React from "react";

function Home(props) {
  const { PlayPause, MuteUnmute } = controls;

  return (
    <div>
{/* <> {JSON.stringify(props.data)}</> 
 */} 

{props.data &&
        props.data.map(
          (item) => (


                                <>
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
                                                        srcSet={`${process.env.REACT_APP_BASE_URL}${item.genre_image}`}
                                                        />
                                                </div>
                                                <div className=" col-sm-7 col-xs-6 songdescriptionsn">
                                                    <div className=" col-sm-11 col-xs-10 songtext">
                                                        <div className="songtextinside">
                                                            <div>
                                                                <div className="texthes">
                                                                {item.genre_name}


                                                                </div>
                                                            </div>

                                                            <div className=" songparagrah">
{/*                                                                 {song_item.user_details[0].first_name} {song_item.user_details[0].last_name}
 */}
                                                            </div>

                                                            <div className=" iconssongs">
                                                                <div className="col-1">
                                                                <PlayArrowIcon style={{ fontSize:"22", color:"#c4c4c4",position:"absolute",right:"5"}} />

{/*                                                                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAMAAAD6fQULAAAAM1BMVEUAAACOjo6Ojo6NjY2Ojo6NjY2NjY2Ojo6NjY2NjY2Pj4+Ojo6Ojo6KioqNjY2UlJSOjo6GDC98AAAAEHRSTlMAPvj07NzVvbOdf3VhIx0TKDXzNwAAAEBJREFUCNdtj8cNACAMA+m9eP9pUV4OgvudFMW2Kcso4Ls2IFmaULc2hEET8tQG18RItK/x8v3CBKaz2b/1vegA0z4GU3ZHUEMAAAAASUVORK5CYII=" />
 */}                                                                </div>
                                                                <div className="">1.8k</div>{" "}
                                                                <div className="col-1">
                                                                <FavoriteSharpIcon style={{ fontSize:"22", color:"#c4c4c4",}} />

{/*                                                                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAM1BMVEUAAACPj4+NjY2NjY2NjY2Ojo6NjY2Pj4+Pj4+Ojo6Ojo6NjY2Pj4+Ojo6Ojo6Ojo6Ojo69xnNrAAAAEHRSTlMAEPBg0KBPPyDfgHAwsJBv1PrvaAAAAGhJREFUGNOt0EsOgCAMRdFS/h+V/a/WFjTVkjjyTl5yEkgA/siEEnlTOOJtpVMYjOfNbdjeZ3kOJj7TVZ7QakTC2nWEUZsDChVWWC9FA9z2wng9yD3MDhIVExUTFZM8/wnoPDZYM/DVCTxTCzt4nbRgAAAAAElFTkSuQmCC" />
 */}                                                                </div>
                                                                <div className="col-1 likes">{item.likes}</div>{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <br />
                                    </div>



                                    {/*                           {JSON.stringify(song_item)} <br />
 */}                          </>





                            ))}





    </div>
  );
}

export default Home;














